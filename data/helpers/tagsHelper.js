const db = require('../../dbConfig')

module.exports = {
  getTags,
  getTagById,
  getTagByTag,
  addTag
}

function getTags() {
  return db('tags')
}
function getTagById(id) {
  return db('tags')
    .where({ id })
    .first()
}
function getTagByTag(tag) {
  return db('tags')
    .where({ tag })
    .first()
}
function addTag(data) {
  return db('tags').insert(data, ['id'])
}
