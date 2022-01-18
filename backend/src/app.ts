import * as express from "express";
import { json } from "body-parser";

export class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }

  private initializeMiddleware() {
    this.app.use(json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`[INFO] App listening on the port ${this.port}`);
    });
  }
}
