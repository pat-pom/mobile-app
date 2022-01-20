import * as mongoose from "mongoose";
import { Product } from "./product.interface";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  state: String,
});

export const productModel = mongoose.model<Product & mongoose.Document>(
  "Product",
  productSchema
);
