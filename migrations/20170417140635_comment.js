
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {
        table.increments('id').primary();
        table.string('comment_text');
        table.integer('reddit_id').references('reddit.id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comment')

};
