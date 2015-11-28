var knexconfig = require('./knexfile');
var knex = require('knex')(knexconfig);

var gtfsdb = require('gtfsdb')(knex)
var gtfsconfig = require('./config.js');

gtfsdb.download(gtfsconfig)
.catch(console.error)
.finally(function () {
    process.exit();
});

