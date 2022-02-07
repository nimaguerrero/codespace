const { Router } = require('express')

const { getProjectsByPage, getProject } = require('../controllers/project')

const router = Router()

router.get('/paginado', getProjectsByPage)
router.get('/:id', getProject)

module.exports = router
