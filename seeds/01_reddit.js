
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reddit').del()
    .then(function () {
      // Inserts seed entries
      return knex('reddit').insert([
        {
           id: 1,
           votes: 35,
           url:'https://www.urmom.com',
           title: 'yoooooo'
         },
        {
          id: 2,
          votes: 26,
          url:'https://www.urmom.com',
          title: 'meow'
        }
      ]);
    });
};
