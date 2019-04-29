const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/logout', (req, res) => {
  if (req.session)
    req.session.destroy(err => {
      if (err) res.send('You can never leave')
      else res.send('Bye bye')
    })
  else res.end()
})
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
)

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  req.session.user = req.user
  const token = generateToken(req.user)
  res.json({ token })
})

function generateToken(stylist) {
  const payload = stylist
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = router
