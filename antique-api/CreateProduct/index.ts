import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getGuid, getUserId } from "../Common/Utils";
import { CreateProductModel } from "../Models/createProduct";
import { ProductModel } from "../Models/product";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log.info("Create product started.");

  const newProduct = req.body as CreateProductModel;

  if (newProduct && newProduct.title && newProduct.description) {
    const product = {
      id: getGuid(),
      title: newProduct.title,
      description: newProduct.description,
    } as ProductModel;

    const productRecordO = {
      userId: getUserId(),
      ...product,
    };

    context.bindings.productRecord = productRecordO;

    context.res = {
      status: 201,
      body: product,
    };
  } else {
    context.res = {
      status: 400,
    };

    context.log.error(
      "Create product invalid input.",
      context.invocationId,
      JSON.stringify(newProduct)
    );
  }

  context.log.info("Create product completed.");
  context.done();
};

export default httpTrigger;
