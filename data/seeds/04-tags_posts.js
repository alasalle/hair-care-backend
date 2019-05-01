exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags_posts')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tags_posts').insert([
        { tag_id: 1, post_id: 1 },
        { tag_id: 2, post_id: 1 },
        { tag_id: 3, post_id: 2 }
      ])
    })
}
