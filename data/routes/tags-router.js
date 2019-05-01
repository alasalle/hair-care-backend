const express = require('express')
const Tags = require('../helpers/tagsHelper')
const router = express.Router()
const { authenticate } = require('../../auth/authenticate')

router.get('/', async (req, res) => {
  try {
    const tags = await Tags.getTags()
    res.status(200).json(tags)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const tag = await Tags.getTagById(id)
    tag
      ? res.status(200).json(tag)
      : res.status(404).json({ error: 'Tag not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/tag/:tag', async (req, res) => {
  const { tag } = req.params
  try {
    const tagRes = await Tags.getTagByTag(tag)
    tagRes
      ? res.status(200).json(tagRes)
      : res.status(404).json({ error: 'Tag not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', authenticate, async (req, res) => {
  const { body } = req
  if (body && body.tag)
    try {
      const id = await Tags.addTag(body, req.decoded.id)
      const newId = parseInt(JSON.stringify(id).match(/[0-9]/g).join``)
      const tag = await Tags.getTagById(newId)
      res.status(201).json({ tag })
    } catch (error) {
      res.status(500).json({ error })
    }
  else res.status(500).json({ error: 'Please provide a tag' })
})

module.exports = router
