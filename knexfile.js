// Update with your config settings.

var path = require('path');
var dbFile = path.join(__dirname, 'gtfs.db');
var conString = "postgres://username:password@localhost/database";

module.exports = {
  // SQLite
  client: 'sqlite3',
  connection: { filename: dbFile },
  
  // PostgreSQL 
  /*
  client: 'postgresql',
  connection: {
      host     : '127.0.0.1',
      database: 'gtfsdb-test',
      //user:     '', // if other than default
      password: '',
      charset  : 'utf8'
  },
  */
  
  migrations: {
    directory: './node_modules/gtfsdb/migrations'
  }
};