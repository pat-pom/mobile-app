import * as express from "express";
import { Product } from "./product.interface";

export class ProductController {
  public path = "/products";
  public router = express.Router();

  private products: Product[] = [
    {
      title: "Krzesło",
      description: "Krzesło na którym siedział Batory",
      price: 120,
      state: "uzywane",
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllProducts);
    this.router.post(this.path, this.createProduct);
  }

  getAllProducts = (request: express.Request, response: express.Response) => {
    response.send(this.products);
  };

  createProduct = (request: express.Request, response: express.Response) => {
    const product: Product = request.body;
    this.products.push(product);
    response.send(product);
  };
}
