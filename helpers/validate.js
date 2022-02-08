const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw
    return next()
  } catch (err) {
    res.status(403).json({
      ok: false,
      msg: 'Errores',
      result: null,
      errors: err.array()
    })
  }
}

module.exports = { validateResult }
