exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0')
  knex('stylists').truncate()
  knex.raw('SET foreign_key_checks = 1')
  return knex('stylists')
  // .then(function() {
  //   // Inserts seed entries
  //   return knex('stylists').insert([
  //     {
  //       google_id:'',
  //       profile_picture: '',
  //       stylist_name: 'shrimpcx',
  //       first_name: 'Joshua',
  //       last_name: 'Gonzalez',
  //       bio: 'Shrimp is the best',
  //       location: 'San Antonio, TX'
  //     }
  //   ])
  // })
}
