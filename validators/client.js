const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate')

const validateUpdateClient = [
  check('email')
    .exists()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
        throw new Error(
          'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
        )
      }
      return true
    }),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateClient }
