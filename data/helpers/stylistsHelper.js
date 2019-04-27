const db = require('../../dbConfig')

module.exports = {
  getStylists,
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
function findStylist(id) {
  return db('stylists')
    .where({ google_id: id })
    .first()
}
function addStylist(data) {
  return db('stylists').insert(data, ['id'])
}
