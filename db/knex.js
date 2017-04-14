const config = require('../knexfile.js')

const environment = 'development'

const pg = require('knex')(config[environment])

module.exports = pg
