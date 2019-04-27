const db = require('../../dbConfig')

module.exports = {
  getStylists,
  findById,
  findStylist,
  addStylist
}

function getStylists() {
  return db('stylists').map(
    ({
      id,
      profile_picture,
      stylist_name,
      first_name,
      last_name,
      bio,
      location
    }) => {
      return {
        id,
        profile_picture,
        stylist_name,
        first_name,
        last_name,
        bio,
        location
      }
    }
  )
}
function findById(id) {
  return db('stylists')
    .where({ id })
    .first()
}
function findStylist(id) {
  return db('stylists')
    .where({ google_id: id })
    .first()
}
function addStylist(data) {
  return db('stylists').insert(data, ['id'])
}
