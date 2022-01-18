import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(5001);
