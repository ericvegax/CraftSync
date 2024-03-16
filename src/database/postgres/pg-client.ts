import pg, { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { pgTable, serial, text, varchar, pgSchema } from "drizzle-orm/pg-core";

const client = new Client({
    host: (process.env.HOST!.toString() || "127.0.0.1"),
    port: (parseInt(process.env.PORT!) || 5432),
    user: (process.env.USER!.toString() || "postgres"),
    password: (process.env.PASSWORD!.toString() || "postgres"),
    database: (process.env.DATABASE!.toString() || "postgres"),
});

(async () => {
    await client.connect();
});

const db = drizzle(client);

/* name space */
export const schema = pgSchema('CraftSync');

export default db;