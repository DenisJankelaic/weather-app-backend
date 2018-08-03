/* app/controllers/welcome.controller.ts */

import fs from "fs";
import { Router, Request, Response, json } from "express";

import { readWeatherDataBase, readCountriesDataBase } from "../../database.helper";
import { Location } from "../../data/contracts/location-contracts";
import "../../data/contracts/weather-data-contracts";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("No city name received");
});

router.get("/cityname/:name", (req: Request, res: Response) => {
    const { name } = req.params;
    const weatherdata = readWeatherDataBase();
    if (weatherdata.some(x => (x.name === name))) {
        res.json(weatherdata.find(x => (x.name === name)));
    } else {
        res.send("No city found");
    }
});

router.get("/code/:code", (req: Request, res: Response) => {
    const { code } = req.params;
    const countriesdata = readCountriesDataBase();
    if (countriesdata.some(x => (x.alpha2Code === code))) {
        res.json(readCountriesDataBase().find(x => (x.alpha2Code === code)));
    } else {
        res.send("No country found");
    }
});

router.get("/coords/coords", (req: Request, res: Response) => {
    const { lon, lat }: Location = req.query;
    const weatherdata = readWeatherDataBase();
    if (weatherdata.some((x => (x.coord.lon === Number(lon) && x.coord.lat === Number(lat))))) {
        res.json(weatherdata.find(x => (x.coord.lon === Number(lon) && x.coord.lat === Number(lat))));
    } else {
        res.send("No city found");
    }
});

// Export the express.Router() instance to be used by server.ts
export const WeatherController: Router = router;
