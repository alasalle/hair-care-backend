const db = require('../../dbConfig')

module.exports = {
  getStylists,
  getStylistById,
  getStylistByGoogleId,
  addStylist,
  editStylist,
  deleteStylist
}

function getStylists() {
  return db
    .select(
      'id',
      'profile_picture',
      'stylist_name',
      'first_name',
      'last_name',
      'bio',
      'location',
      'phone_number'
    )
    .from('stylists')
}
function getStylistById(id) {
  return db
    .select(
      'id',
      'profile_picture',
      'stylist_name',
      'first_name',
      'last_name',
      'bio',
      'location',
      'phone_number'
    )
    .from('stylists')
    .where({ id })
    .first()
}
function getStylistByGoogleId(id) {
  return db('stylists')
    .where({ google_id: id })
    .first()
}
function addStylist(data) {
  return db('stylists').insert(data, ['id'])
}
function editStylist(id, data) {
  return db('stylists')
    .where({ id })
    .update({ data }, ['id'])
}
function deleteStylist(id) {
  return db('stylists')
    .where({ id })
    .del()
}
