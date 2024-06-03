import pg, { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { pgSchema } from "drizzle-orm/pg-core";

const client = new Client({
    host: (process.env.HOST! || "localhost"),
    port: (parseInt(process.env.PORT!) || 5432),
    user: (process.env.USER! || "YOUR_USERNAME"),
    password: (process.env.PASSWORD! || "YOUR_PASSWORD"),
    database: (process.env.DATABASE! || "YOUR_DATABASE"),
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
