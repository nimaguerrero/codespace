/** Express router providing user related routes
 * @module routers/project
 * @requires express
 * @requires ../models/project
 * @requires ../models/tag
 * @requires ../helpers/pages
 * @requires ../helpers/handleError
 */

/** Express */
const { response, request } = require('express')
/** Models */
const Project = require('../models/project')
/** Helpers */
const {
  conditionPrevious,
  conditionNext,
  fillPagesArr
} = require('../helpers/pages')
const { filtersHelper } = require('../helpers/filters')

/**
 * Funcion que obtiene las canciones por pagina y por filtro de año de lanzamiento
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const getProjectsByPage = async (req = request, res = response) => {
  const term = req.query.term
  const regex = new RegExp(term, 'i')

  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const projects = {
    projects: [],
    next: null,
    previous: null,
    pages: [],
    size: 0
  }

  const size = await Project.find({
    $or: [{ name: regex }, { description: regex }]
  }).countDocuments()
  projects.size = size

  projects.projects = await Project.find({
    $or: [{ name: regex }, { description: regex }]
  })
    .limit(limit)
    .skip(startIndex)
    .sort({ createdAt: -1 })

  const lengthArr = Math.ceil(size / limit)
  projects.pages = fillPagesArr(lengthArr)

  projects.previous = conditionPrevious(startIndex, page)
  projects.next = conditionNext(endIndex, size, page)

  res.json({
    ok: true,
    msg: 'Todo bien',
    result: { projects },
    errors: []
  })
}

const filterProjects = (req = request, res = response) => {
  const { projects } = req.body
  const filtro = req.query.filtro
  const value = req.query.value
  const filterP = filtersHelper(projects, filtro, value)
  res.json({
    ok: true,
    msg: 'Todo bien',
    result: {
      projects: filterP
    },
    errors: []
  })
}

const getProject = async (req = request, res = response) => {
  const id = req.params.id
  const project = await Project.findById(id)

  if (!project) {
    return res.status(404).json({
      ok: false,
      msg: 'No hay proyecto con este id',
      result: null,
      errors: []
    })
  }

  res.json({
    ok: true,
    msg: 'Todo bien',
    result: { project },
    errors: []
  })
}

module.exports = {
  getProjectsByPage,
  getProject,
  filterProjects
}
