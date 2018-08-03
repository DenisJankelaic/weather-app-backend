"use strict";
/* app/controllers/welcome.controller.ts */
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var database_helper_1 = require("../../database.helper");
require("../../data/contracts/weather-data-contracts");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send("No city name received");
});
router.get("/cityname/:name", function (req, res) {
    var name = req.params.name;
    var weatherdata = database_helper_1.readWeatherDataBase();
    if (weatherdata.some(function (x) { return (x.name === name); })) {
        res.json(weatherdata.find(function (x) { return (x.name === name); }));
    }
    else {
        res.send("No city found");
    }
});
router.get("/code/:code", function (req, res) {
    var code = req.params.code;
    var countriesdata = database_helper_1.readCountriesDataBase();
    if (countriesdata.some(function (x) { return (x.alpha2Code === code); })) {
        res.json(database_helper_1.readCountriesDataBase().find(function (x) { return (x.alpha2Code === code); }));
    }
    else {
        res.send("No country found");
    }
});
router.get("/coords/coords", function (req, res) {
    var _a = req.query, lon = _a.lon, lat = _a.lat;
    var weatherdata = database_helper_1.readWeatherDataBase();
    if (weatherdata.some((function (x) { return (x.coord.lon === Number(lon) && x.coord.lat === Number(lat)); }))) {
        res.json(weatherdata.find(function (x) { return (x.coord.lon === Number(lon) && x.coord.lat === Number(lat)); }));
    }
    else {
        res.send("No city found");
    }
});
// Export the express.Router() instance to be used by server.ts
exports.WeatherController = router;
