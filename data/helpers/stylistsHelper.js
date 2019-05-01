const db = require('../../dbConfig')

module.exports = {
  getStylists,
  getStylistById,
  getFullStylistById,
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
      'phone_number',
      'stylist'
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
      'phone_number',
      'stylist'
    )
    .from('stylists')
    .where({ id })
    .first()
}
function getFullStylistById(id) {
  return db('stylists')
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
function editStylist(id, data, userId) {
  if (userId == id)
    return db('stylists')
      .where({ id })
      .update({ ...data }, ['id'])
  else return null
}
function deleteStylist(id) {
  return db('stylists')
    .where({ id })
    .del()
}
