/** Express router providing user related routes
 * @module routers/order
 * @requires express
 * @requires axios
 * @requires ../models/client
 * @requires ../models/order
 * @requires ../models/order-detail
 * @requires ../helpers/pages
 * @requires ../helpers/paypal
 * @requires ../helpers/mail
 * @requires ../helpers/order
 * @requires ../helpers/handleError
 */

/** Express */
const { response, request } = require('express')
/** Imports */
const axios = require('axios')
/** Models */
const Order = require('../models/order')
const OrderDetail = require('../models/order-detail')
/** Helpers */
const { sendTicket } = require('../helpers/mail')
const { save } = require('../helpers/order')
const {
  conditionPrevious,
  conditionNext,
  fillPagesArr
} = require('../helpers/pages')
const { paypalHelper } = require('../helpers/paypal')

/**
 * Funcion que obtiene todas las ordenes del cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente
 * @param req.query.page {Number} Pagina
 * @param req.query.limit {Number} Limite
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const getClientOrdersByPage = async (req = request, res = response) => {
  const client = req.uid

  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const orders = {
    orders: [],
    next: null,
    previous: null,
    pages: [],
    longitud: 0
  }

  const longitud = await Order.find({
    client
  }).countDocuments()
  orders.longitud = longitud
  orders.orders = await Order.find({
    client
  })
    .limit(limit)
    .skip(startIndex)
    .sort({ createdAt: -1 })

  const lengthArr = Math.ceil(longitud / limit)
  orders.pages = fillPagesArr(lengthArr)

  orders.previous = conditionPrevious(startIndex, page, limit)
  orders.next = conditionNext(endIndex, longitud, page, limit)

  // foreach para cuando sean mas
  orders.orders = await Promise.all(
    orders.orders.map(async (order) => {
      order.details = await OrderDetail.find({
        orderId: order._id
      }).populate('projectId')
      return order
    })
  )

  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      orders
    },
    errors: []
  })
}

const getTicket = async (req = request, res = response) => {
  const uid = req.uid
  const transaction = req.params.transaction
  let order = []
  if (transaction === 'last') {
    order = await Order.find({ client: uid })
      .populate('client', 'name email')
      .sort({ createdAt: -1 })
  } else {
    order = await Order.find({ client: uid, transaction }).populate(
      'client',
      'name email'
    )
  }
  const details = await OrderDetail.find({ order }).populate('tag', 'name')
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      ticket: {
        order: order[0],
        details
      }
    },
    errors: []
  })
}

/**
 * Función para crear la orden de compra
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.params.tagId {import("mongoose").ObjectId} Id del tag que va a comprar
 * @param req.uid {import("mongoose").ObjectId} Identificador del cliente
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const createOrder = async (req = request, res = response) => {
  const uid = req.uid
  const projectId = req.params.projectId
  const { links } = await paypalHelper({ uid, projectId })
  const link = links.filter((link) => link.rel === 'approve')[0]

  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      link: link.href
    },
    errors: []
  })
}

/**
 * Función para capturar la orden de compra del cliente
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @param req.params.uid {import("mongoose").ObjectId} Id del cliente porque no se como enviarle por headers
 * @param req.params.tagId {import("mongoose").ObjectId} Id del tag que va a comprar
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const captureOrder = async (req = request, res = response) => {
  const uid = req.params.uid
  const tagId = req.params.tagId

  const { token } = req.query
  const response = await axios.post(
    `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: process.env.PAYPAL_API_CLIENT,
        password: process.env.PAYPAL_API_SECRET
      }
    }
  )

  const transaction = response.data.purchase_units[0].payments.captures[0].id
  const payer = response.data.payer

  const orderId = await save({ uid, tagId, transaction, payer })

  await sendTicket(orderId, transaction)

  res.redirect(`${process.env.HOST}/shop/ticket/last`)
}

const cancelOrder = (req = request, res = response) =>
  res.redirect(process.env.HOST)

module.exports = {
  getClientOrdersByPage,
  createOrder,
  captureOrder,
  cancelOrder,
  getTicket
}
