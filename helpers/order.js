// logo, correlativo
const Setting = require('../models/setting')
const Project = require('../models/project')

// ventas
const Order = require('../models/order')
const OrderDetail = require('../models/order-detail')

const { zfill } = require('../helpers/zFill')

/**
 * Función save para guardar venta y su detalle
 * @param {String} uid El uid del cliente
 * @param {String} tagId El id del tag
 * @param {String} transaction La transacción del cliente
 * @param {String} payer La información del paypal del cliente
 * @returns {Promise<String>}
 */
const save = async ({ uid, projectId, transaction, payer }) => {
  const { price } = await Project.findById(projectId)
  const { serie, correlative, igv } = await Setting.findById(
    process.env.SETTING_ID
  )

  const order = {
    client: uid,
    subtotal: price,
    total: price + igv,
    igv,
    transaction,
    payer
  }

  const details = [
    {
      discount: 0,
      subtotal: price,
      quantity: 1,
      client: uid
    }
  ]

  const newOrder = new Order(order)

  const lastOrder = await Order.find().sort({ createdAt: -1 })

  if (lastOrder.length > 0) {
    const sc = lastOrder[0].norder.split('-')
    if (sc[1] !== '999999') {
      const newCorrelative = zfill(Number(sc[1]) + 1, 6)
      newOrder.nsale = `${serie}-${newCorrelative}`
    } else {
      const newSerie = zfill(Number(sc[0]) + 1, 3)
      newOrder.norder = `${serie}-${newSerie}`
    }
  } else {
    newOrder.norder = `${serie}-${correlative}`
  }

  await newOrder.save()

  details.forEach(async (detail) => {
    const newSaleDetail = new OrderDetail(detail)
    newSaleDetail.orderId = newOrder.id
    await newSaleDetail.save()
  })

  return newOrder.id
}

module.exports = {
  save
}
