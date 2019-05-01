const db = require('../../dbConfig')

module.exports = {
  getUsers,
  getUserById,
  getUserByGoogleId,
  addUser,
  editUser,
  deleteUser
}

function getUsers() {
  return db
    .select('id', 'profile_picture', 'username', 'first_name', 'last_name')
    .from('users')
}
function getUserById(id) {
  return db
    .select('id', 'profile_picture', 'username', 'first_name', 'last_name')
    .from('users')
    .where({ id })
    .first()
}
function getUserByGoogleId(id) {
  return db('users')
    .where({ google_id: id })
    .first()
}
function addUser(data) {
  return db('users').insert(data, ['id'])
}
function editUser(id, data) {
  return db('users')
    .where({ id })
    .update({ data }, ['id'])
}
function deleteUser(id) {
  return db('users')
    .where({ id })
    .del()
}
