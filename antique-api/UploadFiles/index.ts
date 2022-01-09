import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { BlobServiceClient, BlobHTTPHeaders } from "@azure/storage-blob";
import { PICTURE_CONTAINER_NAME, SUPORTED_FILE_TYPES } from "../Common/Consts";
import { getUploadedFiles } from "../Common/Utils";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log.info("Upload file started.");

  const blobServiceClient = await BlobServiceClient.fromConnectionString(
    process.env["antiqueapistorage_STORAGE"]
  );
  const containerClient = await blobServiceClient.getContainerClient(
    PICTURE_CONTAINER_NAME
  );

  const files = getUploadedFiles(req);

  if (files.length > 15) {
    context.res = {
      status: 400,
    };
  } else {
    for (const file of files) {
      if (SUPORTED_FILE_TYPES.includes(file.type)) {
        const blockBlobClient = await containerClient.getBlockBlobClient(
          file.filename
        );
        await blockBlobClient.upload(file.data, file.data.length, {
          blobHTTPHeaders: { blobContentType: file.type },
        });
      } else {
        context.res = {
          status: 400,
          message: file.filename,
        };
      }
    }
  }

  context.log.info("Upload file completed.");
  context.done();
};

export default httpTrigger;
