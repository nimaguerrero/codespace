const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
  {
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: false },
    norder: { type: String, required: true },
    subtotal: { type: Number, required: false },
    total: { type: Number, required: true },
    igv: { type: Number, required: true },
    transaction: { type: String, default: '', required: false },
    state: { type: String, default: 'Pendiente', required: true },
    report: { type: String, required: false },
    createdAt: { type: Date, default: Date.now, required: true },
    payer: { type: Object, required: false } // de paypal
  },
  { collection: 'orders' }
)

OrderSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('Order', OrderSchema)
