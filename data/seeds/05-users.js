exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0')
  knex('users').truncate()
  knex.raw('SET foreign_key_checks = 1')
  return knex('users').then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        google_id: '102419806416882998583',
        profile_picture:
          'https://lh4.googleusercontent.com/-1ySoZYJfqlY/AAAAAAAAAAI/AAAAAAAAN0M/LYiojDv84UA/photo.jpg',
        username: 'Joshua Gonzalez',
        first_name: 'Joshua',
        last_name: 'Gonzalez'
      },
      {
        id: 2,
        google_id: '102157180982144344794',
        profile_picture:
          'https://lh3.googleusercontent.com/-md_I4afizO4/AAAAAAAAAAI/AAAAAAAAAQA/egtlYqloMZE/photo.jpg',
        username: 'shrimp',
        first_name: 'shrimp',
        last_name: ''
      }
    ])
  })
}
