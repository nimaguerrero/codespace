const filtersHelper = (projects, filter, value) => {
  const FILTERS = {
    free: projects.filter(({ price }) => price === 0),
    price: projects.filter(({ price }) => price < value),
    stars: projects.filter(({ stars }) => stars < value)
  }
  return FILTERS[filter] || projects
}

module.exports = { filtersHelper }
