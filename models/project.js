const { Schema, model } = require('mongoose')

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    tag: { type: String, required: true },
    link_youtube: { type: String, required: false },
    language: { type: String, required: true },
    cover: {
      type: Object,
      required: true,
      default: {
        url: 'https://res.cloudinary.com/gigga/image/upload/v1643325421/codespace/no-image_dgujkr_ymzbux.jpg',
        public_id: 'codespace/no-image_dgujkr_ymzbux'
      }
    },
    imgs: [{ type: Object, required: true }],
    preview: { type: String, required: true },
    download: { type: String, required: true },
    stars: { type: Number, default: 0, required: true },
    state: { type: String, default: 'Edicion', required: true },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true }
  },
  { collection: 'projects' }
)

ProjectSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('Project', ProjectSchema)
