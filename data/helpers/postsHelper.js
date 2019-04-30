const db = require('../../dbConfig')

module.exports = {
  getPosts,
  getPostById,
  addPost,
  editPost,
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
function addPost(data, userId) {
  return db('posts').insert({ ...data, stylist_id: userId }, ['id'])
}
async function editPost(id, description, userId) {
  const post = await getPostById(id)
  if (post.stylist_id === userId) {
    return db('posts')
      .where({ id })
      .update({ description }, ['id'])
  } else return null
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
