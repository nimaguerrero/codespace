const fse = require('fs-extra') // soporte a las promesas
const { v4: UUID_V4 } = require('uuid')
const cloudinary = require('cloudinary')

const saveCloudinary = async (req, modelObj, modelName) => {
  if (req.file) {
    const result = await cloudinary.v2.uploader.upload(
      req.file.path,
      {
        resource_type: 'image',
        public_id: `codespace/${modelName}/${UUID_V4()}`,
        overwrite: true
      },
      (error, result) => {
        if (error) {
          console.log(error)
          return {
            url: '',
            public_id: ''
          }
        }
        return result
      }
    )
    modelObj.cover = {
      url: result.url,
      public_id: result.public_id
    }
    await fse.unlink(req.file.path)
  }
}
module.exports = { saveCloudinary }
