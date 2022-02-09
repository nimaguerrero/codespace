const fs = require('fs')
const handlebars = require('handlebars')
const ejs = require('ejs')
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

// poner en español la fecha
const { formatDateToSpanish } = require('./formatDateToSpanish')

// logo, correlativo
const Setting = require('../models/setting')

// Venta
const Order = require('../models/order')
const OrderDetails = require('../models/order-details')

const sendTicket = async (orderId, transaction) => {
  const { logo } = await Setting.findById(process.env.SETTING_ID)

  const readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
      if (err) {
        callback(err)
        throw err
      } else {
        callback(null, html)
      }
    })
  }

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        // TODO: CREAR GMAIL
        user: 'codespace@gmail.com',
        pass: 'zebdjdlxriizuizc'
      }
    })
  )

  const venta = await Order.findById(orderId).populate('client', 'name email')
  const detalles = await OrderDetails.find({ order: orderId }).populate(
    'tag',
    'name search_song'
  )
  const cliente = `${venta.client.name}`
  const f = new Date(venta.createdAt)
  const fecha = formatDateToSpanish(f)
  const data = detalles
  const subtotal = venta.subtotal
  const total = venta.total
  const precioEnvio = venta.igv

  readHTMLFile(process.cwd() + '/views/mail.html', (error, html) => {
    if (error) {
      console.log(error)
      throw error
    }
    const restHtml = ejs.render(html, {
      logo: logo.url,
      data,
      cliente,
      transaction,
      fecha,
      subtotal,
      total,
      precioEnvio
    })
    const template = handlebars.compile(restHtml)
    const htmlToSend = template({ op: true })
    const mailOptions = {
      from: 'mrstems21@gmail.com',
      to: venta.client.email,
      subject: 'Gracias por tu compra',
      html: htmlToSend
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (!error) {
        console.log('Email sent: ' + info.response)
      }
    })
  })
}

module.exports = {
  sendTicket
}
