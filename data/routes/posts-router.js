const express = require('express')
const Posts = require('../helpers/postsHelper')
const router = express.Router()

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

router.post('/', async (req, res) => {
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

module.exports = router
