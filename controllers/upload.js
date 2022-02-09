/** Express */
const { response, request } = require('express')

const getImg = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {},
    errors: []
  })
}

const getDownload = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {},
    errors: []
  })
}

module.exports = { getImg, getDownload }
