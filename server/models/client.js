const { Schema, model } = require('mongoose')

const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: false, default: 'Peru' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: {
      type: Object,
      required: true,
      default: {
        url: 'https://res.cloudinary.com/gigga/image/upload/v1643325420/codespace/no-user_c2w7q2_xz3ftl_vn6lrk.png',
        public_id: 'mrstems/no-user_c2w7q2_xz3ftl_vn6lrk'
      }
    },
    gender: { type: String, required: false },
    recoveryKey: { type: String, required: false },
    active: { type: Boolean, default: true, required: true },
    test: { type: Boolean, default: false, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true }
  },
  { collection: 'clients' }
)

ClientSchema.method('toJSON', function () {
  const { __v, _id, password, ...object } = this.toObject()
  object.uid = _id
  return object
})

module.exports = model('Client', ClientSchema)
