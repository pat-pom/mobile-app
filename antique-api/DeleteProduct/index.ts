import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getUserId } from "../Common/Utils";
import { deleteProduct } from "../DataAccess/productRepository";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log.info("Delete product started.");

  const id = context.bindingData.id;
  const userId = getUserId();

  try {
    await deleteProduct(id, userId);
    context.res = {
      status: 204,
    };
  } catch (error) {
    if (
      error.message.includes(
        "Entity with the specified id does not exist in the system"
      )
    ) {
      context.res = {
        status: 404,
      };
    } else {
      throw error;
    }
  }

  context.log.info("Delete product completed.");
  context.done();
};

export default httpTrigger;
