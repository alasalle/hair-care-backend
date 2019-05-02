const express = require('express')
const Ratings = require('../helpers/ratingsHelper')
const router = express.Router()
const { authenticate } = require('../../auth/authenticate')
const Stylists = require('../helpers/stylistsHelper')

router.get('/', async (req, res) => {
  try {
    const ratings = await Ratings.getRatings()
    res.status(200).json(ratings)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:rating', async (req, res) => {
  const { rating } = req.params
  try {
    const ratings = await Ratings.getRatingsByRating(rating)
    ratings && ratings.length > 0
      ? res.status(201).json(ratings)
      : res.status(404).json({ error: 'There are no ratings with that number' })
  } catch (error) {
    res.status(500).json({ error })
  }
})
router.get('/stylist/:id', async (req, res) => {
  const { id } = req.params
  try {
    const ratings = await Ratings.getRatingsByStylist(id)
    ratings && ratings.length > 0
      ? res.status(201).json(ratings)
      : res
          .status(404)
          .json({ error: 'That stylist has no ratings or does not exist!' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/user/:id', async (req, res) => {
  const { id } = req.params
  try {
    const ratings = await Ratings.getRatingsByUser(id)
    ratings && ratings.length > 0
      ? res.status(201).json(ratings)
      : res.status(404).json({
          error: 'That user has not made any ratings or does not exist!'
        })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', authenticate, async (req, res) => {
  const { body } = req
  if (body && body.stylist_id && body.user_id && body.rating) {
    const rated = await Stylists.getStylistById(body.stylist_id)
    if (rated.stylist == true) {
      if (body.stylist_id !== body.user_id) {
        try {
          const success = await Ratings.addRating(body)
          const ratings = await Ratings.getRatingsByStylist(body.stylist_id)
          console.log(ratings)
          res.status(201).json(ratings)
        } catch (error) {
          res.status(500).json({ error })
        }
      } else
        res.status(500).json({ error: 'You cannot give yourself a rating!' })
    } else
      res.status(500).json({ error: 'You cannot give a non stylist a rating!' })
  } else
    res.status(500).json({
      error:
        'Please provide a rating, stylist id, and user id, description is optional'
    })
})

router.put('/', authenticate, async (req, res) => {
  const { body } = req
  if (body && (body.rating || body.description))
    try {
      const success = await Ratings.editRating(body, req.decoded.id)
      if (success) {
        const ratings = await Ratings.getRatingsByStylist(body.stylist_id)
        res.status(201).json({ ratings })
      } else
        res.status(500).json({ error: 'You cannot edit another users rating!' })
    } catch (error) {
      res.status(500).json({ error })
    }
  else res.status(500).json({ error: 'Please provide a change to make' })
})

module.exports = router
