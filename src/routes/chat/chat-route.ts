import Route, { Method } from "../Route";
import { Request, Response } from "express";
import Filter from 'bad-words';

const filter: Filter = new Filter();

/**
 * @category chat
 */
class Chat extends Route {

    constructor() {
        super('/chat');
        this.registerEvent('/filter', Method.POST, this.onChat);
    }

    /***
     * @event chat 
     */
    async onChat(req: Request, res: Response) {
        /* sends back the filtered chat message */
        res.json(filter.clean(req.body.message));
    }
}

export default new Chat();