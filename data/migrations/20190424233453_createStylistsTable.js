exports.up = function(knex, Promise) {
  return knex.schema.createTable('stylists', tbl => {
    tbl.increments()
    tbl
      .string('stylist_name', 128)
      .notNullable()
      .unique()
    tbl.string('password', 128).notNullable()
    tbl.string('first_name', 128).notNullable()
    tbl.string('last_name', 128).notNullable()
    tbl.string('bio', 256).notNullable()
    tbl.string('location', 128).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stylists')
}
