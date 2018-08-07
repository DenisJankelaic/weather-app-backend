import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "./routes/weather-routes";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = "mongodb+srv://admin:admin@internshipdb-gkw0x.mongodb.net/cities?retryWrites=tru";

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

// tslint:disable-next-line:no-default-export
export default new App().app;
