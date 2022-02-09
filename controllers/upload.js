/** Express */
const { response, request } = require('express')
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const getDownload = async (req = request, res = response) => {
  const path = req.params.path
  const url = s3.getSignedUrl('getObject', {
    Key: `projects/${path}`,
    Bucket: process.env.AWS_BUCKET,
    Expires: 5 // S3 default is 900 seconds (15 minutes)
  })
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      url
    },
    errors: []
  })
}

module.exports = { getDownload }
