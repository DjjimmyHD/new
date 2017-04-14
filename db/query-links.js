const pg = require('./knex')

function getAll() {
  return pg('reddit').select().orderBy('votes')
}
function add(obj){
  return pg('reddit').insert(obj)
}
function update(id,value){
  return pg('reddit').where('id', '=', id).increment('votes',1)
}

module.exports ={
  getAll,
  add,
  update
}
