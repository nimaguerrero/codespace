const { Router } = require('express')

const {
  getLanguages
} = require('../controllers/language')

const router = Router()

router.get('/', getLanguages)

module.exports = router
