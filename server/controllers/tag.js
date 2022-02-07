/** Express router providing user related routes
 * @module routers/tag
 * @requires express
 * @requires ../models/tag
 * @requires ../helpers/handleError
 */

/** Express */
const { response, request } = require('express')
/** Models */
const Tag = require('../models/tag')
/** Error */
const { handleError } = require('../helpers/handleError')

const getTags = async (req = request, res = response) => {
  try {
    const tags = await Tag.find({})
    res.json({
      ok: true,
      tags
    })
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = {
  getTags
}
