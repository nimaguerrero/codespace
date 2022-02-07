/** Express router providing user related routes
 * @module routers/setting
 * @requires express
 * @requires ../models/setting
 * @requires ../helpers/handleError
 */

/** Express */
const { response, request } = require('express')
/** Models */
const Setting = require('../models/setting')
/** Error */
const { handleError } = require('../helpers/handleError')

const getIgv = async (req = request, res = response) => {
  try {
    const { igv } = await Setting.findById(process.env.SETTING_ID)
    res.json({
      ok: true,
      igv
    })
  } catch (err) {
    handleError(res, err)
  }
}

const getLogo = async (req = request, res = response) => {
  try {
    const { logo } = await Setting.findById(process.env.SETTING_ID)
    res.json({
      ok: true,
      logo
    })
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = {
  getIgv,
  getLogo
}
