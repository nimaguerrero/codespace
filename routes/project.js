const { Router } = require('express')

const { getProjectsByPage, getProject } = require('../controllers/project')

const router = Router()

// ?term=&limit=&page=filter=&value=
router.get('/paginado', getProjectsByPage)
router.get('/:id', getProject)

module.exports = router
