const pg = require('./knex')

function getAll() {
  return pg('reddit').select()
}
function add(obj){
  return pg('reddit').insert(obj)
}
module.exports ={
  getAll,
  add
}
