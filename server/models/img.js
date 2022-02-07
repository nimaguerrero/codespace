const { Schema, model } = require('mongoose')

const ImgSchema = new Schema(
  {
    public_id: { type: String, required: true, default: 'https://res.cloudinary.com/gigga/image/upload/v1643325421/codespace/no-image_dgujkr_ymzbux.jpg' },
    url: { type: String, required: true, default: 'codespace/no-image_dgujkr_ymzbux' },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date, default: Date.now, required: true }
  },
  { collection: 'imgs' }
)

ImgSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = model('Img', ImgSchema)
