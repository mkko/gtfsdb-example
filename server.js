var express = require('express');
var path = require('path');

var api = require('./routes/api');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || 8080;

app.use('/', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.stack);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;

app.listen(port);
console.log('Listening on port ' + port) + '...';
