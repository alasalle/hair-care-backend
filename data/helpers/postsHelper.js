const db = require('../../dbConfig')

module.exports = {
  getPosts,
  getPostById,
  addPost
}

function getPosts() {
  return db('posts')
}
function getPostById(id) {
  return db('posts')
    .where({ id })
    .first()
}
function addPost(data) {
  return db('posts').insert(data, ['id'])
}
