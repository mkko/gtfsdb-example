var router = require('express').Router();
//var gtfs = require('../lib/gtfs');

var knexconfig = require('../knexfile');
var knex = require('knex')(knexconfig);
var gtfsdb = require('gtfsdb')(knex);
var Promise = require('bluebird');

/* Enable CORS */
/*router.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});*/


router.get('/agency', function(req, res, next) {
  gtfsdb.getAllAgencies()
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

//router.get('/agenciesNearby/:lat/:lon', function(req, res, next) {
//  var lat = req.params.lat;
//  var lon = req.params.lon;
//
//  gtfs.getAgenciesByDistance(lat, lon, function(e, data) {
//    if(e) return next(e);
//    res.send(data || {
//      error: 'No agencies within default radius'
//    });
//  });
//});

//router.get('/agenciesNearby/:lat/:lon/:radiusInMiles', function(req, res, next) {
//  var lat = req.params.lat;
//  var lon = req.params.lon;
//  var radius = req.params.radiusInMiles;
//
//  gtfs.getAgenciesByDistance(lat, lon, radius, function(e, data) {
//    if(e) return next(e);
//    res.send(data || {
//      error: 'No agencies within radius of ' + radius + ' miles'
//    });
//  });
//});

router.get('/agency/:agency', function(req, res, next) {
  var agencyKey = req.params.agency;
  gtfsdb.getAgencies(agencyKey)
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

router.get('/agency/:agency/route', function(req, res, next) {
  var agency_key = req.params.agency;
  gtfsdb.getRoutes(agency_key)
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

router.get('/agency/:agency/route/:routeId', function(req, res, next) {
  var agencyKey = req.params.agency;
  var routeId = req.params.routeId;
  Promise.props({
    route: gtfsdb.getRoute(agencyKey, routeId),
    trips: gtfsdb.getRouteTrips(agencyKey, routeId)
  })
  .then(function(data) {
    res.send(data)
  })
  //gtfsdb.getRoute(req.params.agency, req.params.routeId)
  //.then(function(agencies) {
  //  gtfsdb.getRouteTrips(req.params.agency, req.params.routeId)
  //  
  //  res.send(agencies);
  //})
  .catch(next);
});

router.get('/agency/:agency/trip', function(req, res, next) {
  gtfsdb.getTrips(req.params.agency)
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

//router.get('/routesNearby/:lat/:lon/:radiusInMiles', function(req, res, next) {
//  var lat = req.params.lat;
//  var lon = req.params.lon;
//  var radius = req.params.radiusInMiles;
//
//  gtfs.getRoutesByDistance(lat, lon, radius, function(e, data) {
//    if(e) return next(e);
//    res.send(data || {
//      error: 'No routes within radius of ' + radius + ' miles'
//    });
//  });
//});

//router.get('/routesNearby/:lat/:lon', function(req, res, next) {
//  var lat = req.params.lat;
//  var lon = req.params.lon;
//
//  gtfs.getRoutesByDistance(lat, lon, function(e, data) {
//    if(e) return next(e);
//    res.send(data || {
//      error: 'No routes within default radius'
//    });
//  });
//});

router.get('/agency/:agency/stop', function(req, res, next) {
  gtfsdb.getStops(req.params.agency)
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

router.get('/agency/:agency/stop/:stopId', function(req, res, next) {
  gtfsdb.getStop(req.params.agency, req.params.stopId)
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

//router.get('/agency/:agency/stop/:stopId/timetables', function(req, res, next) {
//});

router.get('/agency/:agency/stop/:stop/timetables', function(req, res, next) {
  var agency_key = req.params.agency;
  gtfsdb.getStopsByAgencyKey(agency_key)
  .then(function(agencies) {
    res.send(agencies);
  })
  .catch(next);
});

module.exports = router;
