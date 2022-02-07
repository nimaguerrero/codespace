const { Schema, model } = require('mongoose')

const TagSchema = new Schema(
  {
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true }
  },
  { collection: 'tags' }
)

TagSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('Tag', TagSchema)
