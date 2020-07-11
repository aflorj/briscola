import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { Board } from './Board.js';
import { Briscola } from './GameLogic.js';
import { Lobby } from 'boardgame.io/react';
import React from 'react';

const BriscolaClient = Client({
  game: Briscola,
  numPlayers: 2,
  debug: false,
  board: Board,
  multiplayer: SocketIO({ server: server }),
});

const server = `https://${window.location.hostname}`;
const importedGames = [{ game: Briscola, board: Board }];

const App = () => (
<Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
); 

export default App;