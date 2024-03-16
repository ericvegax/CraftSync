import player, { IPlayer } from './login-model';
import db, { schema } from '../../database/postgres/pg-client';
import { eq } from 'drizzle-orm';

export const getPlayer = (name: string, unique: string) => {

    /***
     * @description whenever a new player logins in, there UUID and name
     * are stored in the database. When a player leaves both the name and
     * last_login will get updated.
     */

    return new Promise<IPlayer>((resolve, reject) => {
        if (db.select().from(player).where(eq(player.unique, unique)) !== null) { // Old Player
            
        } else { // New Player

        }

        
    });
}