/** Express router providing user related routes
 * @module routers/report
 * @requires express
 * @requires ../models/report.model
 * @requires ../helpers/handleError.helper
 */

/** Express */
const { response, request } = require("express");
/** Models */
const Report = require("../models/report.model");
/** Error */
const { handleError } = require("../helpers/handleError.helper");

/**
 * Función para que el cliente cree un reporte
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.body {Report} Objeto reporte
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const createReport = async (req = request, res = response) => {
    const addReport = req.body;

    try {
        const newReport = new Report(addReport);
        await newReport.save();

        res.json({
            ok: true,
            msg: "Mensaje enviado",
            report: newReport,
        });
    } catch (err) {
        handleError(res, err);
    }
};

module.exports = {
    createReport,
};
