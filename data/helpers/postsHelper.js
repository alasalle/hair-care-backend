const db = require('../../dbConfig')

module.exports = {
  getPosts,
  getPostById,
  addPost,
  deletePostById
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
async function deletePostById(id, userId) {
  const post = await getPostById(id)
  if (post.stylist_id === userId) {
    return db('posts')
      .where({ id })
      .first()
      .del()
  } else return null
}
