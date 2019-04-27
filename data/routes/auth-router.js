const router = require('express').Router()
const passport = require('passport')

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
  res.send('you reached the callback URI')
})

module.exports = router
