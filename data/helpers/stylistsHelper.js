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
async function getStylistById(id) {
  const stylist = await db('stylists')
    .where({ id })
    .first()
  let newStylist = {}
  for (let i in stylist) if (i !== 'google_id') newStylist[i] = stylist[i]
  return newStylist
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
