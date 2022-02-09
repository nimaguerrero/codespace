const { Router } = require('express')
const router = Router()

const { getClient, updateClient, getProfile } = require('../controllers/client')

const { validateJWT } = require('../middlewares/validate-jwt')
const { validateUpdateClient } = require('../validators/client')

router.get('/', validateJWT, getClient)
router.get('/profile', validateJWT, getProfile)
router.put('/update', [validateUpdateClient, validateJWT], updateClient)

module.exports = router
