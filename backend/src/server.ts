import "dotenv/config";

import { App } from "./app";
import { validateEnv } from "./utils/validateEnv";
import { ProductController } from "./modules/products/products.controller";

validateEnv();

const controllers = [new ProductController()];

const app = new App(controllers);

app.listen();
