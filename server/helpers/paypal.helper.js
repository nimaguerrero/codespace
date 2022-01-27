const axios = require("axios");
const Setting = require("../models/setting.model");
const Tag = require("../models/tag.model");

const paypalHelper = async ({ uid, tagId }) => {
    const { igv } = await Setting.findById(process.env.IDCONFIG);
    const { price } = await Tag.findById(tagId);

    const total = price + igv;

    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: total,
                },
                description: "Envio de link al correo",
            },
        ],
        application_context: {
            brand_name: "mrstems.com",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: `${process.env.HOST}/orders/capture-order/${uid}/${tagId}`,
            cancel_url: `${process.env.HOST}/orders/cancel-order`,
        },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
        data: { access_token },
    } = await axios.post(`${process.env.PAYPAL_API}/v1/oauth2/token`, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
            username: process.env.PAYPAL_API_CLIENT,
            password: process.env.PAYPAL_API_SECRET,
        },
    });

    const response = await axios.post(
        `${process.env.PAYPAL_API}/v2/checkout/orders`,
        order,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    return response.data;
};

module.exports = { paypalHelper };
