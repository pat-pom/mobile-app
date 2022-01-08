import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getAllProducts } from "../DataAccess/productRepository";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log.info("Get all products started.");

  const products = await getAllProducts();

  if (products && products.length > 0) {
    context.res = {
      status: 200,
      body: products,
    };
  } else {
    context.res = {
      status: 404,
    };
  }

  context.log.info("Get all products completed.");
  context.done();
};

export default httpTrigger;
