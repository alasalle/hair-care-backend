exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', table => {
    table.increments()
    table.integer('user_id').notNullable()
    table.integer('post_id').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('likes')
}
