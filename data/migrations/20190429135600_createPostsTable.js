exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', tbl => {
    tbl.increments()
    tbl.string('image', 512).notNullable()
    tbl.string('description', 512).notNullable()
    tbl
      .integer('stylist_id')
      .unsigned()
      .references('id')
      .inTable('stylists')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
}
