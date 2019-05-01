exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl
      .string('google_id', 128)
      .notNullable()
      .unique()
    tbl.string('profile_picture', 128)
    tbl
      .string('username', 128)
      .notNullable()
      .unique()
    tbl.string('first_name', 128)
    tbl.string('last_name', 128)
    tbl.string('location', 128)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
