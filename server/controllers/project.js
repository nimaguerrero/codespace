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
const Tag = require('../models/tag')
/** Helpers */
const {
  conditionPrevious,
  conditionNext,
  fillPagesArr
} = require('../helpers/pages')
/** Error */
const { handleError } = require('../helpers/handleError')

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

  // filtro
  const func = req.query.func
  const param = req.query.param

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const songs = {
    songs: [],
    next: null,
    previous: null,
    pages: [],
    longitud: 0
  }

  try {
    const longitud = await Project.find({
      $or: [
        { name: regex },
        { tags_names: { $in: [regex] } },
        { artists: { $in: [regex] } }
      ]
    }).countDocuments()
    songs.longitud = longitud

    let s
    if (func === 'orden' && param === 'Año de lanzamiento') {
      s = await Project.find({
        $or: [
          { name: regex },
          { tags_names: { $in: [regex] } },
          { artists: { $in: [regex] } }
        ]
      })
        .limit(limit)
        .skip(startIndex)
        .sort({ release_year: -1 })
    } else {
      s = await Project.find({
        $or: [
          { name: regex },
          { tags_names: { $in: [regex] } },
          { artists: { $in: [regex] } }
        ]
      })
        .limit(limit)
        .skip(startIndex)
        .sort({ createdAt: -1 })
    }
    songs.songs = s

    const lengthArr = Math.ceil(longitud / limit)
    songs.pages = fillPagesArr(lengthArr)

    songs.previous = conditionPrevious(startIndex, page, limit)
    songs.next = conditionNext(endIndex, longitud, page, limit)

    res.json({
      ok: true,
      songs
    })
  } catch (err) {
    handleError(res, err)
  }
}

const getProject = async (req = request, res = response) => {
  const id = req.params.id
  const projectObj = {
    project: {},
    tags: []
  }
  try {
    projectObj.project = await Project.findById(id)
    const projectId = projectObj.project._id
    projectObj.tags = await Tag.find({ project: projectId })
    res.json({
      ok: true,
      project: projectObj
    })
  } catch (err) {
    handleError(res, err)
  }
}

module.exports = {
  getProjectsByPage,
  getProject
}
