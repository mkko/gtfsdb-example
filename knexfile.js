// Update with your config settings.

var path = require('path');
var dbFile = path.join(__dirname, 'gtfs.db');

module.exports = {
  client: 'sqlite3',
  connection: { filename: dbFile },
  migrations: {
    directory: './node_modules/gtfsdb/migrations'
  }
};