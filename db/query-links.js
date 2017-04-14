const pg = require('./knex')

function getAll() {
  return pg('reddit').select().orderBy('votes','desc')
}
function add(obj){
  return pg('reddit').insert(obj)
}
function upvote(id,value){
  return pg('reddit').where('id', '=', id).increment('votes',1)
}
function downvote(id,value){
  return pg('reddit').where('id', '=', id).decrement('votes', 1)
}

module.exports ={
  getAll,
  add,
  upvote,
  downvote
}
