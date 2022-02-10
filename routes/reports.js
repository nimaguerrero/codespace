const { Router } = require('express')
const router = Router()

const { createReport } = require('../controllers/report')
const { validateCreateReport } = require('../validators/report')
const { validateJWT } = require('../middlewares/validate-jwt')

router.post('/', [validateCreateReport, validateJWT], createReport)

module.exports = router
