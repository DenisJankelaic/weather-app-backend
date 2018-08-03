/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from "express";

// Import WelcomeController from controllers entry point
import { WeatherController } from "./controllers/weather/weather.controller";

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3001;

// Mount the WelcomeController at the /welcome route
app.use("/city", WeatherController);
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.info("Listening at http://localhost:${port}/");
});
