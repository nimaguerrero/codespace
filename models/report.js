const { Schema, model } = require('mongoose')

const ReportSchema = new Schema(
  {
    orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: false },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: false },
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    problem: { type: String, required: true },
    state: { type: String, required: true, default: 'Pendiente' },
    createdAt: { type: Date, required: true, default: Date.now },
    note: { type: String, required: false }
  },
  { collection: 'reports' }
)

ReportSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('Report', ReportSchema)
