const { Router } = require('express')

const { createReport } = require('../controllers/report')

const router = Router()

router.post('/', createReport)

module.exports = router
