const { Pool } = require('pg')

const pool = new Pool({
  user: 'nodejs',
  host: 'localhost',
  database: 'nodejs',
  password: 'nodejs',
  port: 5432
})

module.exports = pool
