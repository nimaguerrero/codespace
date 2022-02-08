/** Express router providing user related routes
 * @module routers/client
 * @requires express
 * @requires ../models/client
 * @requires ../cloudinary/update
 * @requires ../helpers/handleError
 */

const { response, request } = require('express')
const Client = require('../models/client')

/**
 * Función que envia al correo del cliente el link para el cambio de contraseña
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente proviene de {@link }
 * @param req.body {Client} Todos los datos que quiera actualizar del cliente, se actualiza por defecto updateAt
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const updateClient = async (req = request, res = response) => {
  const newClient = req.body
  const uid = req.uid
  const searchID = await Client.findById(uid)
  if (!searchID) {
    return res.status(404).json({
      ok: true,
      msg: 'Cliente no encontrado por id',
      result: null,
      errors: []
    })
  }

  if (newClient.email !== searchID.email) {
    const searchEmail = await Client.findOne({
      email: newClient.email
    })
    if (searchEmail) {
      return res.status(404).json({
        ok: true,
        msg: 'Este correo ya existe',
        result: null,
        errors: []
      })
    }
  }

  newClient.updatedAt = new Date()

  await Client.findByIdAndUpdate(uid, newClient, {
    new: true
  })

  res.json({
    ok: true,
    msg: 'Perfil actualizado',
    result: {},
    errors: []
  })
}

/**
 * Función que obtiene el perfil, es decir la imagen del cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente proviene de {@link }
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const getProfile = async (req = request, res = response) => {
  const uid = req.uid
  const { profile } = await Client.findById(uid)

  if (!profile) {
    res.json({
      ok: true,
      msg: 'No existe el cliente',
      result: null,
      errors: []
    })
  }

  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      url: profile.url
    },
    errors: []
  })
}

/**
 * Función que obtiene los datos del cliente
 * @async
 * @method
 * @param req request The request.
 * @param res response The response.
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente proviene de {@link }
 * @returns {Promise} Una promesa para entregar datos del cliente
 * @throws
 */
const getClient = async (req = request, res = response) => {
  const uid = req.uid
  const { name, lastname, email, country, profile } = await Client.findById(uid)
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      client: {
        name,
        lastname,
        email,
        country,
        profile
      }
    },
    errors: []
  })
}

module.exports = {
  getClient,
  updateClient,
  getProfile
}
