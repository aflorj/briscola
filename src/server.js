const { Server } = require('boardgame.io/server');
const { Briscola } = require('./GameLogic');

const server = Server({ games: [Briscola] });

server.run(8000);