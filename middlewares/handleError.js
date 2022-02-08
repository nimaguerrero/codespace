const handleError = (err, req, res, next) => {
  return res.statud(500).json({
    ok: false,
    msg: 'Fallo en servidor',
    result: null,
    errors: [
      {
        error: err.message
      }
    ]
  })
}

module.exports = handleError
