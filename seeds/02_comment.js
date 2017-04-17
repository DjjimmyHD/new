
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          comment_text: 'rowValue1',
          reddit_id: 1,

        },
        {
          comment_text: 'rowValue2',
          reddit_id: 2,
        },
        {
          comment_text: 'rowValue3',
          reddit_id: 2,
        }
      ]);
    });
};
