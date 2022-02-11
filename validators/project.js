const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate')

const validateFilterProjects = [
  check('projects').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateFilterProjects }
