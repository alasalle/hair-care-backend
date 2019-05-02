const db = require('../../dbConfig')

module.exports = {
  getLikes,
  getLikeById,
  getLikesByPost,
  getLikesByUser,
  addLike
}

function getLikes() {
  return db('likes')
}
function getLikeById(id) {
  return db('likes')
    .where({ id })
    .first()
}
function getLikesByPost(post_id) {
  return db('likes').where({ post_id })
}
function getLikesByUser(user_id) {
  return db('likes').where({ user_id })
}
function addLike(data) {
  return db('likes').insert(data, ['id'])
}
