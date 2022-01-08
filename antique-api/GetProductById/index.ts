import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getUserId } from "../Common/Utils";
import { getProductById } from "../DataAccess/productRepository";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Get product by is started.");

  const id = context.bindingData.id;
  const userId = getUserId();

  const product = await getProductById(id, userId);

  if (product) {
    context.res = {
      status: 200,
      body: product,
    };
  } else {
    context.res = {
      status: 404,
    };
  }

  context.log("Get product by is completed.");
  context.done();
};

export default httpTrigger;
