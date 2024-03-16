import express, { Router } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import * as routes from "./routes";

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
        const router: Router = express.Router();

        // Router initializer
        Object.entries(routes).forEach(([name, route]) => router.use(route.basePath, route.router));
        this.app.use('/', router);
    };
    
    public startServer = () => this.app.listen(this.port, () => console.log(`[CraftSync Server] back-end is running on port: ${this.port}`));
}