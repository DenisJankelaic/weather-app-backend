import express from "express";

import { WeatherController } from "./controllers/weather/weather.controller";

const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3001;

app.use("/city", WeatherController);
// Serve the application at the given port
app.listen(port, () => {
    console.info("Listening at http://localhost:${port}/");
});
