exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0')
  knex('stylists').truncate()
  knex.raw('SET foreign_key_checks = 1')
  return knex('stylists').then(function() {
    // Inserts seed entries
    return knex('stylists').insert([
      {
        id: 1,
        google_id: '107419806416882998583',
        profile_picture:
          'https://lh4.googleusercontent.com/-1ySoZYJfqlY/AAAAAAAAAAI/AAAAAAAAN0M/LYiojDv84UA/photo.jpg',
        stylist_name: 'Joshua Gonzalez',
        first_name: 'Joshua',
        last_name: 'Gonzalez',
        bio: 'shrimp',
        location: 'San Antonio, TX',
        stylist: true
      },
      {
        id: 2,
        google_id: '103157180982144344794',
        profile_picture:
          'https://lh3.googleusercontent.com/-md_I4afizO4/AAAAAAAAAAI/AAAAAAAAAQA/egtlYqloMZE/photo.jpg',
        stylist_name: 'shrimp',
        first_name: 'shrimp',
        last_name: '',
        bio: 'cats',
        location: 'San Antonio, TX',
        stylist: false
      }
    ])
  })
}
