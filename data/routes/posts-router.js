const express = require('express')
const Posts = require('../helpers/postsHelper')
const router = express.Router()
const { authenticate } = require('../../auth/authenticate')

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.getPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await Posts.getPostById(id)
    post
      ? res.status(200).json(post)
      : res.status(404).json({ error: 'Post not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', authenticate, async (req, res) => {
  const { body } = req
  if (body && body.description && body.stylist_id)
    try {
      const id = await Posts.addPost(body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json({ error })
    }
  else
    res
      .status(500)
      .json({ error: 'Please provide a post description and stylist id' })
})

router.delete('/:id', authenticate, async (req, res) => {
  const userId = req.decoded.id
  const { id } = req.params
  try {
    const exists = await Posts.getPostById(id)
    if (exists) {
      const success = await Posts.deletePostById(id, userId)
      success
        ? res.status(200).json(success)
        : res.status(500).json({
            error: 'You cannot delete a post made by another stylist!'
          })
    } else res.status(404).json({ error: 'Post not found!' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
