import * as mongoose from "mongoose";
import { WeatherSchema } from "../models/weather-data-model";
import { Request, Response } from "express";
import { Location } from "../models/location-model";
import { CountrySchema } from "../models/country-data-model";

const weather = mongoose.model("cities", WeatherSchema);
const countries = mongoose.model("countries", CountrySchema);

export class WeatherController {
  public getCities(req: Request, res: Response): void {
    weather.find({}, (err, city) => {
      if (err) {
        res.send(err);
      }
      res.json(city);
    });
  }
  public getCityWithName(req: Request, res: Response): void {
    weather.find({ name: req.params.cityName }, (err, city) => {
      if (err) {
        res.send(err);
      }
      res.json(city[0]);
    });
  }
  public getCityWithCoords(req: Request, res: Response): void {
    const { lon, lat }: Location = req.query;
    weather.find({
      coords: {
        lon: Number(lon),
        lat: Number(lat)
      }
    }, (err, city) => {
      if (err) {
        res.send(err);
      }
      res.json(city[0]);
    });
  }

  public getCountry(req: Request, res: Response): void {
    countries.find({ alpha2code: req.params.countryCode }, (err, country) => {
      if (err) {
        res.send(err);
      }
      res.json(country[0]);
    });
  }
}
