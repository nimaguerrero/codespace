/** Express router providing user related routes
 * @module routers/language
 * @requires express
 * @requires ../models/language
 * @requires ../helpers/handleError
 */

/** Express */
const { response, request } = require('express')
/** Models */
const Language = require('../models/language')
/** Error */
const { handleError } = require('../helpers/handleError')

const getLanguages = async (req = request, res = response) => {
  try {
    const languages = await Language.find({})
    res.json({
      ok: true,
      languages
    })
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = {
  getLanguages
}
