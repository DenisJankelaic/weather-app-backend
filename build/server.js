"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var weather_controller_1 = require("./controllers/weather/weather.controller");
var app = express_1.default();
// The port the express app will listen on
var port = process.env.PORT || 3001;
app.use("/city", weather_controller_1.WeatherController);
// Serve the application at the given port
app.listen(port, function () {
    console.info("Listening at http://localhost:${port}/");
});
