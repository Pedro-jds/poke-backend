import express, { json } from 'express';
import { errors } from 'celebrate';


import routes from './routes';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
		this.server.use(json());
	}

	routes() {
		this.server.use(routes);
		this.server.use(errors());
    }
}
  
  
export default new App().server;