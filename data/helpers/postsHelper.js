const db = require('../../dbConfig')

module.exports = {
  getPosts,
  getPostById,
  getPostByStylist,
  getPostsByTag,
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
function getPostByStylist(stylist_id) {
  return db('posts').where({ stylist_id })
}
function getPostsByTag(tag) {
  return db
    .select(
      'posts.id as post_id',
      'description',
      'image',
      'stylist_id',
      'posts.description',
      'tag'
    )
    .from('tags_posts')
    .innerJoin('tags', function() {
      this.on('tag_id', '=', 'tags.id')
    })
    .innerJoin('posts', function() {
      this.on('post_id', '=', 'posts.id')
    })
    .where({ 'tags.tag': tag })
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
