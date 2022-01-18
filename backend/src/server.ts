import { App } from "./app";

import { ProductController } from "./modules/products/products.controller";

const port = process.env.port || 8080;

const controllers = [new ProductController()];

const app = new App(controllers, port);

app.listen();
