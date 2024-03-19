import Route, {Method} from "../Route";
import {Request, Response} from "express";

const DEFAULT_HEADLINE = "[]";

class Bungee extends Route {

    constructor() {
        super('/bungee');
        this.registerEvent('/motd', Method.GET, this.onMOTD);
    }

    onMOTD(req: Request, res: Response) {

    }
}