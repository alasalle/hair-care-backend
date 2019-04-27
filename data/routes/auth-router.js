const router = require('express').Router()

router.get('/login', (req, res) => {
  res.send('<h3>Logging In</h3>')
})
router.get('/logout', (req, res) => {
  res.send('<h3>Logging Out</h3>')
})
router.get('/google', (req, res) => {
  res.send('<h3>Logging In With Google</h3>')
})

module.exports = router
