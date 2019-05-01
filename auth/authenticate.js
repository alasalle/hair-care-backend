const jwt = require('jsonwebtoken')

module.exports = {
  authenticate,
  checkStylist,
  checkUser
}

function authenticate(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json(err)

      req.decoded = decoded

      next()
    })
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header'
    })
  }
}

function checkStylist(req, res, next) {
  const { decoded } = req

  if (decoded.stylist === 1) {
    next()
  } else {
    return res.status(401).json({
      error: 'You must be a stylist in order to perform this action'
    })
  }
}

function checkUser(req, res, next) {
  const { decoded } = req

  if (decoded.stylist === 0) {
    next()
  } else {
    return res.status(401).json({
      error: 'You must be a user in order to perform this action'
    })
  }
}
