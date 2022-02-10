const { Router } = require('express')
const router = Router()

const { getIgv, getLogo } = require('../controllers/setting')

router.get('/logo', getLogo)
router.get('/igv', getIgv)

module.exports = router
