const db = require('../../dbConfig')

module.exports = {
  getStylists
}

function getStylists() {
  return db('stylists').map(
    ({ id, stylist_name, first_name, last_name, bio, location }) => {
      return {
        id,
        stylist_name,
        first_name,
        last_name,
        bio,
        location
      }
    }
  )
}
