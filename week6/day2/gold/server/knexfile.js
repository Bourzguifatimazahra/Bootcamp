module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'your_user',
        password: 'your_password',
        database: 'your_database'
      },
      migrations: {
        directory: './migrations'
      }
    }
  };
  