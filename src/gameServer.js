const { Server } = require('boardgame.io/server');
const { Briscola } = require('./gameLogic.js');
import { GAME_SERVER_PORT } from './config.js';
const server = Server({
  games: [Briscola],
});

server.run(GAME_SERVER_PORT);
