const { Router } = require('express')

const {
  getIgv,
  getLogo
} = require('../controllers/setting')

const router = Router()

router.get('/logo', getLogo)
router.get('/igv', getIgv)

module.exports = router
