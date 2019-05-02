exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ratings').insert([
        {
          user_id: 2,
          stylist_id: 1,
          rating: 9,
          description: `The best haircut I've ever recieved!`
        },
        {
          user_id: 5,
          stylist_id: 1,
          rating: 8,
          description: `One of the best haircuts I've ever recieved!`
        },
        {
          user_id: 22,
          stylist_id: 1,
          rating: 7,
          description: `Great haircut for the money (:`
        },
        {
          user_id: 3,
          stylist_id: 1,
          rating: 9,
          description: `The best haircut I've ever recieved!`
        },
        {
          user_id: 10,
          stylist_id: 1,
          rating: 9,
          description: `The best haircut I've ever recieved!`
        }
      ])
    })
}
