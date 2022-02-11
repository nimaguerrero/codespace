const { Router } = require('express')
const router = Router()

const {
  getIgv,
  getLogo,
  getTags,
  getLanguages
} = require('../controllers/setting')

router.get('/logo', getLogo)
router.get('/igv', getIgv)
router.get('/tags', getTags)
router.get('/languages', getLanguages)

module.exports = router
