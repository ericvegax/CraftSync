import Route, { Method } from "../Route";
import { Request, Response } from "express";
import * as _ from './login-controller';

/** @category account */
class Login extends Route {

    constructor() {
        super('/login');

        /* registering event */
        this.registerEvent('/', Method.POST, this.onLogin);
    }

    /** @event Login */
    onLogin(req: Request, res: Response) {
        
    }
}

export default new Login();