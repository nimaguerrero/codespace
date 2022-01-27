const fs = require("fs");
const handlebars = require("handlebars");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const path = require("path");

// poner en español la fecha
const {
    formatDateToSpanish,
} = require("../helpers/formatDateToSpanish.helper");

// logo, correlativo
const Setting = require("../models/setting.model");

// Venta
const Sale = require("../models/sale.model");
const SaleDetail = require("../models/sale-detail.model");

const sendTicket = async (saleid, transaction) => {
    const { logo } = await Setting.findById(process.env.IDCONFIG);

    const readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            } else {
                callback(null, html);
            }
        });
    };

    const transporter = nodemailer.createTransport(
        smtpTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: "mrstems21@gmail.com",
                pass: "zebdjdlxriizuizc",
            },
        })
    );

    const venta = await Sale.findById(saleid).populate(
        "client",
        "name lastname email"
    );
    const detalles = await SaleDetail.find({ sale: saleid }).populate(
        "tag",
        "name search_song"
    );
    const cliente = `${venta.client.name} ${venta.client.lastname}`;
    const f = new Date(venta.createdAt);
    const fecha = formatDateToSpanish(f);
    const data = detalles;
    const subtotal = venta.subtotal;
    const total = venta.total;
    const precio_envio = venta.igv;

    readHTMLFile(process.cwd() + "/views/mail.html", (err, html) => {
        let rest_html = ejs.render(html, {
            logo: logo.url,
            data,
            cliente,
            transaction,
            fecha,
            subtotal,
            total,
            precio_envio,
        });

        let template = handlebars.compile(rest_html);
        let htmlToSend = template({ op: true });

        let mailOptions = {
            from: "mrstems21@gmail.com",
            to: venta.client.email,
            subject: "Gracias por tu compra",
            html: htmlToSend,
        };
        // res.status(200).send({ data: true });
        transporter.sendMail(mailOptions, function (error, info) {
            if (!error) {
                console.log("Email sent: " + info.response);
            }
        });
    });
};

module.exports = {
    sendTicket,
};
