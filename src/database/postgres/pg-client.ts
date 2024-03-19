import pg, { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { pgSchema } from "drizzle-orm/pg-core";

const client = new Client({
    host: (process.env.HOST! || "localhost"),
    port: (parseInt(process.env.PORT!) || 5432),
    user: (process.env.USER! || "postgres"),
    password: (process.env.PASSWORD! || "toor"),
    database: (process.env.DATABASE! || "postgres"),
});

enum Database {
    ACCOUNT = 'account',
    BUNGEE = 'bungee',
    SERVER = 'server'
}

client.connect().then(result => console.log("[CraftSync] Successfully connected to the Postgres Database!"));

const db = drizzle(client);

/* name space */
export const schema = pgSchema('CraftSync');

export { Database }
export default db;