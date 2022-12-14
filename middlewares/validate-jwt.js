const jwt = require('jsonwebtoken')
const { response, request } = require('express')

const validateJWT = async (req = request, res = response, next) => {
  const token = req.headers.authorization.split(' ').pop()

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición',
      result: null,
      errors: []
    })
  }

  try {
    const verificar = jwt.verify(token, process.env.JWT_SECRET)
    const { uid } = verificar
    req.uid = uid

    next()
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no válido',
      result: null,
      errors: []
    })
  }
}

module.exports = {
  validateJWT
}
