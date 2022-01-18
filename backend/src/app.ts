import * as express from "express";
import * as mongoose from "mongoose";
import { json } from "body-parser";

import { Controller } from "./interfaces/controller.interface";

export class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`[INFO] App listening on the port ${process.env.PORT}.`);
    });
  }

  private initializeMiddleware() {
    this.app.use(json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private connectToTheDatabase() {
    mongoose.connect(process.env.CONNECTION_STRING, () => {
      console.log("[INFO] Connected to MongoDB database.");
    });
  }
}
