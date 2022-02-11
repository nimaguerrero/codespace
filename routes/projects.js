const { Router } = require('express')

const {
  getProjectsByPage,
  getProject,
  filterProjects
} = require('../controllers/project')
const { validateFilterProjects } = require('../validators/project')

const router = Router()

// ?term=&limit=&page=
router.get('/paginado', getProjectsByPage)
router.get('/:id', getProject)
router.post('/filters', validateFilterProjects, filterProjects) // ?filtro=&value=

module.exports = router
