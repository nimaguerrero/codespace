const { Router } = require('express')
const { getDownload } = require('../controllers/upload')
const router = Router()

router.get('/download/:path', getDownload)

module.exports = router
