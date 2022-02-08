const { Router } = require('express')
const router = Router()

const { register, login } = require('../controllers/auth')
const { validateRegister, validateLogin } = require('../validators/auth')

router.post('/register', validateRegister, register)
router.post('/login', validateLogin, login)

module.exports = router
