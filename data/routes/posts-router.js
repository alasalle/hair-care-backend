const express = require('express')
const Posts = require('../helpers/postsHelper')
const router = express.Router()
const {
  authenticate,
  checkStylist,
  checkUser
} = require('../../auth/authenticate')

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

router.post('/tags', authenticate, checkStylist, async (req, res) => {
  const { tag } = req.body
  try {
    const posts = await Posts.getPostsByTag(tag)
    posts
      ? res.status(200).json(posts)
      : res.status(404).json({ error: 'Posts not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', authenticate, checkStylist, async (req, res) => {
  const { body } = req
  if (body && body.description && body.stylist_id)
    try {
      const id = await Posts.addPost(body, req.decoded.id)
      const newId = parseInt(JSON.stringify(id).match(/[0-9]/g).join``)
      const post = await Posts.getPostById(newId)
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json({ error })
    }
  else
    res
      .status(500)
      .json({ error: 'Please provide a post description and stylist id' })
})

router.put('/:id', authenticate, checkStylist, async (req, res) => {
  const { body } = req
  const { id } = req.params
  if (body && body.description)
    try {
      const exists = await Posts.getPostById(id)
      if (exists) {
        const edit = await Posts.editPost(id, body.description, req.decoded.id)
        edit
          ? res.status(201).json(edit)
          : res.status(500).json({
              error: 'You cannot edit a post made by another stylist!'
            })
      } else res.status(404).json({ error: 'Post not found' })
    } catch (error) {
      res.status(500).json({ error: JSON.stringify(error) })
    }
  else
    res
      .status(500)
      .json({ error: 'Please provide a post description to change' })
})

router.delete('/:id', authenticate, checkStylist, async (req, res) => {
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
