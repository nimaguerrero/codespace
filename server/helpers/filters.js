const Project = require('../models/project')

const filtersHelper = async (projects, limit, filter, param) => {
  const s = await Project.find({}).limit(limit)
  let resp
  switch (filter) {
    case 'tag':
      resp = s.filter(({ tagId }) => tagId === param)
      break
    case 'language':
      resp = s.filter(({ languageId }) => languageId === param)
      break
    case 'free':
      resp = s.filter(({ price }) => price === 0)
      break
    case 'price':
      resp = s.filter(({ price }) => price < param)
      break
    default:
      resp = projects
      break
  }
  return resp
}

module.exports = { filtersHelper }
