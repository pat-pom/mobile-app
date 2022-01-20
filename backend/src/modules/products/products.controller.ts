import * as express from "express";
import { Product } from "./product.interface";
import { productModel } from "./product.model";

export class ProductController {
  public path = "/products";
  public router = express.Router();
  private product = productModel;

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllProducts);
    this.router.get(`${this.path}/:id`, this.getByProductId);
    this.router.post(this.path, this.createProduct);
    this.router.patch(`${this.path}/:id`, this.updateProduct);
    this.router.delete(`${this.path}/:id`, this.deleteProduct);
  }

  getAllProducts = (request: express.Request, response: express.Response) => {
    this.product.find().then((products) => {
      response.send(products);
    });
  };

  getByProductId = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    this.product.findById(id).then((product) => {
      response.send(product);
    });
  };

  createProduct = (request: express.Request, response: express.Response) => {
    const product: Product = request.body;
    const createdProduct = new this.product(product);
    createdProduct.save().then((savedProduct) => {
      response.send(savedProduct);
    });
  };

  updateProduct = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    const productData: Product = request.body;
    this.product
      .findByIdAndUpdate(id, productData, { new: true })
      .then((product) => {
        response.send(product);
      });
  };

  deleteProduct = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    this.product.findByIdAndDelete(id).then((successResponse) => {
      if (successResponse) {
        response.sendStatus(200);
      } else {
        response.sendStatus(404);
      }
    });
  };
}
