
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reddit', (table) => {
        table.increments('id').primary();
        table.string('url')
        table.string('title');
        table.integer('votes');
  })
};

exports.down = function(knex, Promise) {
    return kenx.schema.dropTableIfExists('reddit')

};
