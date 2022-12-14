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

const getIgv = async (req = request, res = response) => {
  const { igv } = await Setting.findById(process.env.SETTING_ID)
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: { igv },
    errors: []
  })
}

const getLogo = async (req = request, res = response) => {
  const { logo } = await Setting.findById(process.env.SETTING_ID)
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: { logo },
    errors: []
  })
}

const getLanguages = async (req = request, res = response) => {
  const { languages } = await Setting.findById(process.env.SETTING_ID)
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: { languages },
    errors: []
  })
}

const getTags = async (req = request, res = response) => {
  const { tags } = await Setting.findById(process.env.SETTING_ID)
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: { tags },
    errors: []
  })
}

module.exports = {
  getIgv,
  getLogo,
  getTags,
  getLanguages
}
