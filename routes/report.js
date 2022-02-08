const { Router } = require('express')
const router = Router()

const { createReport } = require('../controllers/report')
const { validateCreateReport } = require('../validators/report')

router.post('/', validateCreateReport, createReport)

module.exports = router
