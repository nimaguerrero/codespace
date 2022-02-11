const filtersHelper = (projects, filtro, value) => {
  const FILTERS = {
    language: projects.filter(({ language }) => language.name === value),
    tag: projects.filter(({ tag }) => tag.name === value),
    price: projects.sort((a, b) =>
      a.price > b.price ? 1 : b.price > a.price ? -1 : 0
    ),
    stars: projects.sort((a, b) =>
      a.stars > b.stars ? 1 : b.stars > a.stars ? -1 : 0
    )
  }
  return FILTERS[filtro] || projects
}

module.exports = { filtersHelper }
