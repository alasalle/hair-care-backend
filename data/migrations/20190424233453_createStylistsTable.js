exports.up = function(knex, Promise) {
  return knex.schema.createTable('stylists', tbl => {
    tbl.increments()
    tbl
      .string('google_id', 128)
      .notNullable()
      .unique()
    tbl.string('profile_picture', 128)
    tbl
      .string('stylist_name', 128)
      .notNullable()
      .unique()
    tbl.string('first_name', 128).notNullable()
    tbl.string('last_name', 128).notNullable()
    tbl.string('bio', 256)
    tbl.string('location', 128)
    tbl.string('phone_number', 32)
    tbl
      .boolean('stylist')
      .notNullable()
      .defaultTo(false)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stylists')
}
