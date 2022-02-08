const { Router } = require('express')
const router = Router()

const {
  sendEmail,
  updatePassword,
  getTimeCode
} = require('../controllers/change-password')

const {
  validateSendEmail,
  validateUpdatePassword
} = require('../validators/change-password')

router.get('/:code', getTimeCode)
router.post('/email', validateSendEmail, sendEmail)
router.post('/update-password', validateUpdatePassword, updatePassword)

module.exports = router
