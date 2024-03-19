import Route, {Method} from "../../Route";
import { Request, Response } from "express";

class Donation extends Route {

    constructor() {
        super('/donation');
        this.registerEvent('/purchase', Method.POST, this.onDonate);
    }

    onDonate(req: Request, res: Response) {

    }
}