exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0')
  knex('posts').truncate()
  knex.raw('SET foreign_key_checks = 1')
  return knex('posts')
  // .then(function() {
  //   // Inserts seed entries
  //   return knex('posts').insert([
  //     {
  //       image:'https://scontent-dfw5-1.cdninstagram.com/vp/8a25434ef469e272a7684b0e3f3e0b8c/5D5BFC12/t51.2885-15/e35/21227544_1783060938659766_6759646888833581056_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com',
  //       description:'blue hair; don't care',
  //       stylist_id:1
  //     }
  //   ])
  // })
}
