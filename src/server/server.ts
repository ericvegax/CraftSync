import express, { Router } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import * as routes from "./routes";
import chalk from 'chalk';

export class Server {

    protected app: express.Application;
    protected port: number = parseInt(process.env.PORT!) || 3000;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(helmet());
    }

    public setRoutes = () => {

    };

    public runServer = () => this.app.listen(this.port, () => console.log(`[Server] back-end is running on port: ${this.port}`));
}