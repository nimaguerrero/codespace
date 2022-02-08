const zfill = (number, width) => {
  const numberOutput = Math.abs(number)
  const length = number.toString().length
  const zero = '0'

  if (width <= length) {
    if (number < 0) return '-' + numberOutput.toString()
    return numberOutput.toString()
  } else {
    if (number < 0) {
      return '-' + zero.repeat(width - length) + numberOutput.toString()
    }
    return zero.repeat(width - length) + numberOutput.toString()
  }
}

module.exports = {
  zfill
}
