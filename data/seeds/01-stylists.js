exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stylists')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('stylists').insert([
        {
          stylist_name: 'shrimpcx',
          password: '1234',
          first_name: 'Joshua',
          last_name: 'Gonzalez',
          bio: 'Shrimp is the best',
          location: 'San Antonio, TX'
        }
      ])
    })
}
