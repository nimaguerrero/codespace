/** Express router providing user related routes
 * @module routers/auth
 * @requires express
 * @requires bcryptjs
 * @requires ../models/client.model
 * @requires ../helpers/jwt.helper
 * @requires ../helpers/handleError.helper
 */

/** Express */
const { response, request } = require("express");
/** Imports */
const bcrypt = require("bcryptjs");
/** Models */
const Client = require("../models/client.model");
/** Helpers */
const { createToken } = require("../helpers/jwt.helper");
/** Error */
const { handleError } = require("../helpers/handleError.helper");

/**
 * @typedef {Object} Register
 * @property {string} email El correo del cliente
 * @property {string} password La contraseña del cliente
 * @property {string} name El nombre del cliente
 * @property {string} lastname El apellido del cliente
 */

/**
 * Función que registra al cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.body {Register} Todos los datos que quiera actualizar del cliente, se actualiza por defecto updateAt
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const register = async (req = request, res = response) => {
    const { email, password } = req.body;
    try {
        const existEmail = await Client.findOne({ email });
        if (existEmail) {
            return res.status(404).json({
                ok: false,
                msg: "Correo ya está registrado",
            });
        }

        const newClient = new Client(req.body);

        const salt = bcrypt.genSaltSync();
        newClient.password = bcrypt.hashSync(password, salt);

        await newClient.save();

        const { profile } = newClient;

        res.json({
            ok: true,
            profile,
            token: createToken(newClient),
        });
    } catch (err) {
        handleError(res, err);
    }
};

/**
 * Función que inicia sesión el cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.body {{email:string,password:string}} Todos los datos que quiera actualizar del cliente, se actualiza por defecto updateAt
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const login = async (req = request, res = response) => {
    const { email, password } = req.body;
    try {
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({
                ok: false,
                msg: "Correo no encontrado",
            });
        }

        if (!client.active) {
            return res.status(404).json({
                ok: false,
                msg: "Usted no puede entrar a la pagina, contactese con el administrador",
            });
        }

        const validPass = bcrypt.compareSync(password, client.password);
        if (!validPass) {
            return res.status(404).json({
                ok: false,
                msg: "Contraseña incorrecta",
            });
        }

        res.json({
            ok: true,
            token: createToken(client),
        });
    } catch (error) {
        handleError(res, err);
    }
};

module.exports = {
    register,
    login,
};
