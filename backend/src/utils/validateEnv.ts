import { cleanEnv, str, port } from "envalid";

export const validateEnv = () => {
  cleanEnv(process.env, {
    CONNECTION_STRING: str(),
    PORT: port(),
  });
};
