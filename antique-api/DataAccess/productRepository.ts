import { CosmosClient } from "@azure/cosmos";
import { ProductRecord } from "../Models/productRecord";

function getCosmosDbContainer() {
  const cosmosDbConnectionString = process.env["antiqueapidb_DOCUMENTDB"];

  const client = new CosmosClient(cosmosDbConnectionString);
  const database = client.database("antiquecontainer");
  const container = database.container("products");

  return container;
}

export async function getAllProducts(): Promise<ProductRecord[]> {
  const querySpec = {
    query: `SELECT * from c`,
  };

  const container = getCosmosDbContainer();
  const { resources: proucts } = await container.items
    .query(querySpec)
    .fetchAll();

  return proucts.map((item) => {
    return {
      id: item.id,
      userId: item.userId,
      title: item.title,
      description: item.description,
      images: item.images,
      category: item.category,
      price: item.price,
      state: item.state,
    } as ProductRecord;
  });
}

export async function getProductById(
  prouctId: string,
  userId: string
): Promise<ProductRecord> {
  const container = getCosmosDbContainer();
  const { resource: product } = await container.item(prouctId, userId).read();

  return product as ProductRecord;
}

export async function deleteProduct(id: string, userId: string): Promise<any> {
  const container = getCosmosDbContainer();
  const { resource: result } = await container.item(id, userId).delete();
  return result;
}

export async function editProduct(
  id: string,
  userId: string,
  product: ProductRecord
): Promise<ProductRecord> {
  const container = getCosmosDbContainer();
  const { resource: updatedItem } = await container
    .item(id, userId)
    .replace(product);
  return updatedItem;
}

export async function createProduct(product: ProductRecord) {
  const container = getCosmosDbContainer();
  const { resource: createdItem } = await container.items.create(product);
  return createdItem;
}
