import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getUserId } from "../Common/Utils";
import { editProduct } from "../DataAccess/productRepository";
import { ProductModel } from "../Models/product";
import { ProductRecord } from "../Models/productRecord";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Edit product started.");

  const id = context.bindingData.id;
  const userId = getUserId();

  const product = req.body as ProductModel;

  if (product && product.title && product.description) {
    const productRecord = {
      id: id,
      userId: userId,
      title: product.title,
      description: product.description,
      images: product.images,
      category: product.category,
      price: product.price,
      state: product.state,
    } as ProductRecord;

    try {
      await editProduct(id, userId, productRecord);
      context.res = {
        status: 200,
        body: productRecord,
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
  } else {
    context.res = {
      status: 400,
    };
  }

  context.log("Edit product completed.");
  context.done();
};

export default httpTrigger;
