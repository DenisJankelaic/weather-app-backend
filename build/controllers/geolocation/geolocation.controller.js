"use strict";
/* app/controllers/welcome.controller.ts */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
var data = __importStar(require("../../data/weather-data"));
// Assign router to the express.Router() instance
var router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get("/", function (req, res) {
    navigator.geolocation.getCurrentPosition(function (position) {
        res.send(position.coords.latitude);
        // console.log(position);
    });
});
router.get("/:name", function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    // let { CityData } = JSON.parse(data);
    // Greet the given name
    // res.send(`${name}`);
    if (data.data.some(function (x) { return (x.name === name); })) {
        res.json(data.data.find(function (x) { return (x.name === name); }));
    }
    else {
        res.send("Failed");
    }
    // res.json(data.data.some(x => (x.name == name)));
});
// Export the express.Router() instance to be used by server.ts
exports.GeolocationController = router;
