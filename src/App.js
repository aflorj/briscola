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
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

const server = `https://${window.location.hostname}`;
const importedGames = [{ game: Briscola, board: Board }];

const App = () => (
  <div>
  <Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
{/*   <BriscolaClient playerID='0'/>
  <BriscolaClient playerID='1'/> */}
  </div>
); 

export default App;