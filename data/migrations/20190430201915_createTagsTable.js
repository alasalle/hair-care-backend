exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', table => {
    table.increments()
    table
      .string('tag', 32)
      .notNullable()
      .unique()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags')
}
