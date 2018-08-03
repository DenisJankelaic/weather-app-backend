"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function readWeatherDataBase() {
    return JSON.parse(fs_1.default.readFileSync("app/data/databases/weather-data.json", "utf8"));
}
exports.readWeatherDataBase = readWeatherDataBase;
function readCountriesDataBase() {
    return JSON.parse(fs_1.default.readFileSync("app/data/databases/country-names-codes.json", "utf8"));
}
exports.readCountriesDataBase = readCountriesDataBase;
