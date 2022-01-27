/** Express router providing user related routes
 * @module routers/order
 * @requires express
 * @requires axios
 * @requires ../models/client.model
 * @requires ../models/sale.model
 * @requires ../models/sale-detail.model
 * @requires ../helpers/pages.helper
 * @requires ../helpers/paypal.helper
 * @requires ../helpers/mail.helper
 * @requires ../helpers/sale.helper
 * @requires ../helpers/handleError.helper
 */

/** Express */
const { response, request } = require("express");
/** Imports */
const axios = require("axios");
/** Models */
const Sale = require("../models/sale.model");
const SaleDetail = require("../models/sale-detail.model");
const Client = require("../models/client.model");
/** Helpers */
const { sendTicket } = require("../helpers/mail.helper");
const { save } = require("../helpers/sale.helper");
const {
    conditionPrevious,
    conditionNext,
    fillPagesArr,
} = require("../helpers/pages.helper");
const { paypalHelper } = require("../helpers/paypal.helper");
/** Error */
const { handleError } = require("../helpers/handleError.helper");

/**
 * Funcion que obtiene todas las ordenes del cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente
 * @param req.query.page {Number} Pagina
 * @param req.query.limit {Number} Limite
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const getClientOrdersByPage = async (req = request, res = response) => {
    const client = req.uid;

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let orders = {
        orders: [],
        next: null,
        previous: null,
        pages: [],
        longitud: 0,
    };

    try {
        const longitud = await Sale.find({
            client,
        }).countDocuments();
        orders.longitud = longitud;
        orders.orders = await Sale.find({
            client,
        })
            .limit(limit)
            .skip(startIndex)
            .sort({ createdAt: -1 });

        const lengthArr = Math.ceil(longitud / limit);
        orders.pages = fillPagesArr(lengthArr);

        orders.previous = conditionPrevious(startIndex, page, limit);
        orders.next = conditionNext(endIndex, longitud, page, limit);

        // foreach para cuando sean mas
        orders.orders = await Promise.all(
            orders.orders.map(async (order) => {
                order.details = await SaleDetail.find(
                    {
                        sale: order._id,
                    },
                    { name_artist_song: 2, tag: 1, _id: 0 }
                ).populate("tag", "name");
                return order;
            })
        );

        res.json({
            ok: true,
            orders,
        });
    } catch (err) {
        handleError(res, err);
    }
};

const getTicket = async (req = request, res = response) => {
    const uid = req.uid;
    const transaction = req.params.transaction;
    let sale = [];
    try {
        if (transaction === "last") {
            sale = await Sale.find({ client: uid })
                .populate("client", "name lastname email")
                .sort({ createdAt: -1 });
        } else {
            sale = await Sale.find({ client: uid, transaction }).populate(
                "client",
                "name lastname email"
            );
        }
        const details = await SaleDetail.find({ sale }).populate("tag", "name");
        res.json({
            ok: true,
            ticket: {
                sale: sale[0],
                details,
            },
        });
    } catch (err) {
        handleError(res, err);
    }
};

/**
 * Función para crear la orden de compra
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.params.tagId {import("mongoose").ObjectId} Id del tag que va a comprar
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const createOrder = async (req = request, res = response) => {
    const uid = req.uid;
    const tagId = req.params.tagId;
    try {
        const { links } = await paypalHelper({ uid, tagId });
        const link = links.filter((link) => link.rel === "approve")[0];

        res.json({
            ok: true,
            link: link.href,
        });
    } catch (err) {
        handleError(res, err);
    }
};

/**
 * Función para capturar la orden de compra del cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.params.uid {import("mongoose").ObjectId} Id del cliente porque no se como enviarle por headers
 * @param req.params.tagId {import("mongoose").ObjectId} Id del tag que va a comprar
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const captureOrder = async (req = request, res = response) => {
    const uid = req.params.uid;
    const tagId = req.params.tagId;

    const { token, PayerID } = req.query;
    try {
        const response = await axios.post(
            `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
            {},
            {
                auth: {
                    username: process.env.PAYPAL_API_CLIENT,
                    password: process.env.PAYPAL_API_SECRET,
                },
            }
        );

        const transaction =
            response.data.purchase_units[0].payments.captures[0].id;
        const payer = response.data.payer;

        const saleid = await save({ uid, tagId, transaction, payer });

        await sendTicket(saleid, transaction);

        res.redirect(`${process.env.WEB}/shop/ticket/last`);
    } catch (err) {
        handleError(res, err);
    }
};

const cancelOrder = (req = request, res = response) =>
    res.redirect(process.env.WEB);

module.exports = {
    getClientOrdersByPage,
    createOrder,
    captureOrder,
    cancelOrder,
    getTicket,
};
