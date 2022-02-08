const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate')

const validateSendEmail = [
  check('email')
    .exists()
    .not()
    .isEmpty()
    .isEmail()
    .custom((value, { req }) => {
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
        throw new Error(
          'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
        )
      }
      return true
    }),
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

const validateUpdatePassword = [
  check('code').exists().not().isEmpty(),
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateSendEmail, validateUpdatePassword }
