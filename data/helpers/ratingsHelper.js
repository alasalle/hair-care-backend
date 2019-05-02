const db = require('../../dbConfig')

module.exports = {
  getRatings,
  getRatingById,
  getRatingsByRating,
  getRatingsByUser,
  getRatingsByStylist,
  addRating,
  editRating
}

function getRatings() {
  return db('ratings')
}
function getRatingById(id) {
  return db('ratings')
    .where({ id })
    .first()
}
function getRatingsByRating(rating) {
  return db('ratings').where({ rating })
}
function getRatingsByUser(user_id) {
  return db('ratings').where({ user_id })
}
function getRatingsByStylist(stylist_id) {
  return db('ratings').where({ stylist_id })
}
function addRating(data) {
  return db('ratings').insert(data, ['id'])
}
function editRating(data, userId) {
  if (data.user_id === userId) {
    return db('ratings').update(data, ['id'])
  } else return null
}
