const jwt = require('jsonwebtoken')

module.exports = {
  authenticate
}

function authenticate(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
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
