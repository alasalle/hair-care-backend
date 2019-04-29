const db = require('../../dbConfig')

module.exports = {
  getPosts,
  addPost
}

function getPosts() {
  return db('posts')
}
function addPost(data) {
  return db('posts').insert(data, ['id'])
}
