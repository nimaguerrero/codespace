/** Express router providing user related routes
 * @module routers/report
 * @requires express
 * @requires ../models/report
 * @requires ../helpers/handleError
 */

/** Express */
const { response, request } = require('express')
/** Models */
const Report = require('../models/report')
/** Error */
const { handleError } = require('../helpers/handleError')

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
  const addReport = req.body

  try {
    const newReport = new Report(addReport)
    await newReport.save()

    res.json({
      ok: true,
      msg: 'Mensaje enviado',
      report: newReport
    })
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = {
  createReport
}
