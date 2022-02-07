const { Router } = require('express')
const router = Router()

const {
  getClient,
  updateClient,
  getProfile
} = require('../controllers/client')

const { validateJWT } = require('../middlewares/validate-jwt')

router.get('/', validateJWT, getClient)
router.get('/profile', validateJWT, getProfile)
router.put('/update', validateJWT, updateClient)

module.exports = router
