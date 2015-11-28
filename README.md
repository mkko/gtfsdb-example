This is an example project introducing how to use the [GTFSdb][1] package.

Checkout the project and run:

```
node install
```

Update the `config.js` for GTFS sources you want to be imported. Also check the `knexfile.js` if you want to use a database other than SQLite. SQLite is used here for easy setup.

To get the database up to date, run:

```
knex migrate:latest
```

To start the download, run the `update.js` script:

```
node update.js
```

This will get you the GTFS sources to the database.

Finally run the server:

```
node server.js
```

You can test the connection with `curl` for example:

```
curl localhost:8080/agency
```

[1]: https://github.com/mkko/gtfsdb
