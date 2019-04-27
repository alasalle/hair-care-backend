const router = require('express').Router()
const Stylists = require('../helpers/stylistsHelper')

router.get('/', async (req, res) => {
  try {
    const stylists = await Stylists.getStylists()
    res.status(200).json(stylists)
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
