const conditionPrevious = (startIndex, page) => {
  if (startIndex > 0) return page - 1
  return null
}

const conditionNext = (endIndex, longitud, page) => {
  if (endIndex < longitud) return page + 1
  return null
}

const fillPagesArr = (lengthArr) => {
  const arr = []
  for (let i = 0; i < lengthArr; i++) {
    arr[i] = i + 1
  }
  return arr
}

module.exports = {
  conditionPrevious,
  conditionNext,
  fillPagesArr
}
