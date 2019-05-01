exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags_posts', table => {
    table.increments()
    table.integer('tag_id').notNullable()
    table.integer('post_id').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags_posts')
}
