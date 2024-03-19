import express, { Router } from 'express';

class Route {

    public basePath: string;
    public router: Router;

    constructor(basePath: string) {
        this.basePath = basePath;
        this.router = express.Router();
    }

    registerEvent(path: string, method: Method, call: Function) {
        if (method === Method.GET) {
            this.router.get(path, (req, res) => call(req, res));
        } else {
            this.router.post(path, (req, res) => call(req, res));
        }
    }
}

enum Method { GET, POST }

export { Method }
export default Route;