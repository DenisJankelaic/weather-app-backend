import { Request, Response } from "express";

import { WeatherController } from "../controllers/weatherController";

export class Routes {
  public weatherController: WeatherController = new WeatherController();

  public routes(app): void {
    // Get all cities
    app.route("/city").get(this.weatherController.getCities);
    //Get a specific city with its coordinates
    app
      .route("/city/coords")
      .get(this.weatherController.getCityWithCoords);
    // Get a specific city with its name
    app
      .route("/city/:cityName")
      .get(this.weatherController.getCityWithName);
    app
      .route("/country/:countryCode")
      .get(this.weatherController.getCountry);
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll"
      });
    });

    // Contact
    app
      .route("/city")
      // GET endpoint
      .get((req: Request, res: Response) => {
        // Get all contacts
        res.status(200).send({
          message: "GET request successfulll"
        });
      });

    // City detail
    app
      .route("/city/:cityName")
      // get specific city
      .get((req: Request, res: Response) => {
        // Get a single city details
        res.status(200).send({
          message: "GET request successfulll"
        });
      });

    //Country detail
    app
      .route("/country/:countryCode")
      // get specific country
      .get((req: Request, res: Response) => {
        // Get a single city details
        res.status(200).send({
          message: "GET request successfulll"
        });
      });
    //City details
    app
      .route("/city/coords")
      // get specific city
      .get((req: Request, res: Response) => {
        // Get a single city details
        res.status(200).send({
          message: "GET request successfulll"
        });
      });
  }
}
