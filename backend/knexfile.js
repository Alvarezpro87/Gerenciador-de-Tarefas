module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/dev.sqlite3'
      },
      useNullAsDefault: true
    }
  };
  