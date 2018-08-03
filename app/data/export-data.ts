import fs from "fs";

import { CityWeatherData } from "./contracts/weather-data-contracts";
import { CountryData } from "./contracts/country-data-contracts";

export function readWeatherDataBase(): CityWeatherData[] {
    return JSON.parse(fs.readFileSync("app/data/databases/weather-data.json", "utf8"));
}
export function readCountriesDataBase(): CountryData[] {
    return JSON.parse(fs.readFileSync("app/data/databases/country-names-codes.json", "utf8"));
}
