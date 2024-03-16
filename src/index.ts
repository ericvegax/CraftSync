/**
 * 
 * 
 * @author ericvegax
 * @license MIT 
 * 
 * @description a back-end for your Minecraft Server written in TypeScript
 */
import { Server } from "./server/server";

const server = new Server();

server.setRoutes();
server.runServer();