const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/login', (req, res) => {
  res.send('<h3>Logging In</h3>')
})
router.get('/logout', (req, res) => {
  res.send('<h3>Logging Out</h3>')
})
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
)

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // req.session.user = req.user
  const token = generateToken(req.user)
  res.send(token)
})

function generateToken(stylist) {
  const payload = stylist
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = router
