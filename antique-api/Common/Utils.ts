import { v4 as uuid } from "uuid";
import * as parseMultipart from "parse-multipart";

interface Picture {
  filename: string;
  type: string;
  data: Buffer;
}

export const getGuid = (): string => uuid();

export const getUserId = (): string => "dummy-id";

export const getUploadedFiles = (request: any): Picture[] => {
  const boundary = parseMultipart.getBoundary(request.headers["content-type"]);
  if (boundary) {
    const files = parseMultipart.Parse(Buffer.from(request.body), boundary);

    return files;
  }
  throw new Error("Upload Error");
};
