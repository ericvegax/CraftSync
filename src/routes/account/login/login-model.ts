import { date, serial, text, varchar } from "drizzle-orm/pg-core";
import { schema } from "../../../database/postgres/pg-client";

export interface IPlayer {
    id?: number,
    unique: string,
    name: string,
    primaryRank: string,
    lastLogin: number
}

/* player model */
const getPlayerTable = () => {
    return schema.table('Accounts', {
        id: serial('id').primaryKey(),
        unique: varchar('unique', { length: 36 }).notNull(),
        name: varchar('name', { length: 16 }).notNull(),
        primaryRank: text('primary_rank').notNull(),
        lastLogin: date('last_login').notNull()
    });
}

export default getPlayerTable();