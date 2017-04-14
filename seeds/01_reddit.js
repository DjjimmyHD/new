
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reddit').del()
    .then(function () {
      // Inserts seed entries
      return knex('reddit').insert([
        {
           votes: 35,
           url:'https://www.urmom.com',
           title: 'yoooooo'
         },
        {
          votes: 26,
          url:'https://www.urmom.com',
          title: 'meow'
        }
      ]);
    });
};
