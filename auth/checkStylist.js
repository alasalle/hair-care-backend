module.exports = {
  authenticate
}

function authenticate(req, res, next) {
  const { decoded } = req

  if (decoded.stylist === 1) {
    next()
  } else {
    return res.status(401).json({
      error: 'You must be a stylist in order to perform this action'
    })
  }
}
