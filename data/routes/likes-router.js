const express = require('express')
const Likes = require('../helpers/likesHelper')
const router = express.Router()
const { authenticate } = require('../../auth/authenticate')

router.get('/', async (req, res) => {
  try {
    const likes = await Likes.getLikes()
    res.status(200).json(likes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const likes = await Likes.getLikesByPost(id)
    console.log(likes)
    likes && likes.length > 0
      ? res.status(201).json(likes)
      : res
          .status(404)
          .json({ error: 'That post has no likes or does not exist!' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', authenticate, async (req, res) => {
  const { body } = req
  if (body && body.post_id && body.user_id)
    try {
      const success = await Likes.addLike(body)
      const likes = await Likes.getLikesByPost(body.post_id)
      res.status(201).json({ likes })
    } catch (error) {
      res.status(500).json({ error })
    }
  else res.status(500).json({ error: 'Please provide a post id and user id' })
})

module.exports = router
