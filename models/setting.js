const { Schema, model } = require('mongoose')

const SettingSchema = new Schema(
  {
    title: { type: String, required: true },
    igv: { type: Number, required: true },
    logo: { type: Object, required: true },
    serie: { type: String, required: true },
    correlative: { type: String, required: true },
    tags: { type: Array, required: true }, // [{name,icon}]
    languages: { type: Array, required: true } // [{name,icon}]
  },
  { collection: 'settings' }
)

SettingSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('Setting', SettingSchema)
