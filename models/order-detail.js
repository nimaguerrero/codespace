const { Schema, model } = require('mongoose')

const OrderDetailsSchema = new Schema(
  {
    orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    discount: { type: String, required: false },
    transaction: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now, required: true }
  },
  { collection: 'order-details' }
)

OrderDetailsSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('OrderDetails', OrderDetailsSchema)
