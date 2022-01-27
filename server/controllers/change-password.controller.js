/** Express router providing user related routes
 * @module routers/change-password
 * @requires express
 * @requires ../models/client.model
 * @requires bcryptjs
 * @requires fs
 * @requires ejs
 * @requires nodemailer
 * @requires nodemailer-smtp-transport
 * @requires path
 * @requires uuid
 * @requires moment
 * @requires ../helpers/handleError.helper
 */

const { request, response } = require("express");
const Client = require("../models/client.model");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const handlebars = require("handlebars");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const path = require("path");
const { v4: uuid_v4 } = require("uuid");
const { handleError } = require("../helpers/handleError.helper");
const moment = require("moment");

/**
 * Función que envia al correo del cliente el link para el cambio de contraseña
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.body {{email: string}} Objeto con el email del cliente
 * @returns {Promise<void>} Una promesa al momento de enviar el correo
 * @throws
 */
const sendEmail = async (req = request, res = response) => {
    const { email } = req.body;
    try {
        const existEmail = await Client.findOne({ email });

        if (!existEmail) {
            return res.status(404).json({
                ok: false,
                msg: "Correo no está registrado",
            });
        }

        const { _id: id, name, lastname } = existEmail;
        const code = uuid_v4();

        const recovery_key = {
            code,
            exp: moment().add(1, "hour").unix(),
        };

        await Client.findByIdAndUpdate(id, {
            $set: { recovery_key },
        });

        const cliente = `${name} ${lastname}`;
        const link = `${process.env.CHANGE_PASSWORD}/${code}`;

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

        readHTMLFile(
            process.cwd() + "/views/change-password.html",
            (err, html) => {
                let rest_html = ejs.render(html, {
                    cliente,
                    link,
                });

                let template = handlebars.compile(rest_html);
                let htmlToSend = template({ op: true });

                let mailOptions = {
                    from: "mrstems21@gmail.com",
                    to: email,
                    subject: "Solicita cambio de contraseña",
                    html: htmlToSend,
                };

                res.json({
                    ok: true,
                    msg: "Se ha enviado un correo electrónico con las instrucciones para el cambio de tu contraseña. Por favor verifica la información enviada",
                });

                transporter.sendMail(mailOptions, function (error, info) {
                    if (!error) {
                        console.log("Email sent: " + info.response);
                    }
                });
            }
        );
    } catch (err) {
        handleError(res, err);
    }
};

/**
 * @typedef {Object} CPass
 * @property {string} password La nueva contraseña
 * @property {string} code El codigo para validarlo
 */

/**
 * Función que envia al correo del cliente el link para el cambio de contraseña
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.body {CPass} Objeto con el email del cliente
 * @returns {Promise<void>} Una promesa al momento de enviar el correo
 * @throws
 */
const updatePassword = async (req = request, res = response) => {
    const { password: pass, code } = req.body;
    try {
        const salt = bcrypt.genSaltSync();
        const password = bcrypt.hashSync(pass, salt);
        await Client.findOneAndUpdate(
            { "recovery_key.code": code },
            { $set: { password } }
        );

        res.json({
            ok: true,
            msg: "Contraseña actualizada",
        });
    } catch (err) {
        handleError(res, err);
    }
};

const getTimeCode = async (req, res = response) => {
    const code = req.params.code;
    try {
        const client = await Client.find({ "recovery_key.code": code });

        if (!client || client.length <= 0) {
            return res.status(404).json({
                ok: false,
                msg: "Codigo no válido",
                exp: 0,
            });
        }

        const { recovery_key } = client[0];
        res.json({
            ok: true,
            msg: "Tiempo del codigo",
            exp: recovery_key.exp,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error inesperado... revisar logs",
        });
    }
};

module.exports = {
    sendEmail,
    updatePassword,
    getTimeCode,
};
