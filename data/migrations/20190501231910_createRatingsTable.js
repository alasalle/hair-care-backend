exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', table => {
    table.increments()
    table.integer('user_id').notNullable()
    table.integer('stylist_id').notNullable()
    table.integer('rating').notNullable()
    table.text('description')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ratings')
}
