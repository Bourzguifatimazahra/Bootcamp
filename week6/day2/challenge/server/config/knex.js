const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'your-username', // PostgreSQL username
    password: 'your-password', // PostgreSQL password
    database: 'user_management', // Database name
  },
});

module.exports = db;
