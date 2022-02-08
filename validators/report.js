const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate')

const validateCreateReport = [
  check('problem').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateReport }
