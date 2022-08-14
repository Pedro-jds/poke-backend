import express, { json } from "express";
import "express-async-errors";
import { errors } from "celebrate";

import routes from "./routes";
import errorMiddleware from "./app/middlewares/error";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errors());
    this.server.use(errorMiddleware);
  }
}

export default new App().server;
