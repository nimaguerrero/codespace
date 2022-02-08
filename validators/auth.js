const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate')

const validateLogin = [
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
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

const validateRegister = [
  check('name')
    .exists()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)) {
        throw new Error('El nombre solo puede contener letras y espacios')
      }
    }),
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
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateLogin, validateRegister }
