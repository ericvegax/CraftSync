import Route, { Method } from "../../Route";
import { Request, Response, NextFunction } from "express";
import db from "../../../database/postgres/pg-client";
import player from "../../account/login/login-model";
import { eq } from "drizzle-orm";

/***
 * @category chat
 *
 * @todo: This route should receive 2 things from the client... the command attempting to be executed, and the ranks/permissions allowed to execute that command, then check back with the database to see if the player is allowed to execute the command
 * @note we might need to create a custom middleware to read the request to see if the client sent over the COMMAND and PERMISSIONS allowed to execute the command
 */
class Command extends Route {

    private blackListedCommands: string[] = ["icanseebukkit", "pl", "plugins", "op", "reload", "version"];

    constructor() {
        super('/chat');
        this.registerEvent('/command', Method.POST, this.onCommand);
    }

    /***@event command */
    async onCommand(req: Request, res: Response) {
        const command: string = req.body.command;
        const allowedPermissions: string[] = req.body.permissions;
        const allowedRanks: string[] = req.body.ranks;

        let commandResponse: {
            hasPermission: boolean;
            executedCommand: string;
        };

        if (command !== null && allowedRanks !== null || allowedPermissions !== null) {

        } else {
            res.status(400).json({  });
        }
    }
}

export default new Command();