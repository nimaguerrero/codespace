const { Router } = require('express')
const { getDownload, getImg } = require('../controllers/upload')
const router = Router()

router.get('/img', getImg)
router.get('/download', getDownload)

module.exports = router
