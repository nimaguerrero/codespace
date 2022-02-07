const { Router } = require('express')

const {
  getTags
} = require('../controllers/tag')

const router = Router()

router.get('/', getTags)

module.exports = router
