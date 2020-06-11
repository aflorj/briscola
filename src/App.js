import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { Board } from './Board.js';
import { Briscola } from './GameLogic.js';
import React from 'react';

const BriscolaClient = Client({
  game: Briscola,
  debug: false,
  board: Board,
  multiplayer: Local()
});

const App = () => (
  <div>
    <BriscolaClient playerID='0'/>
    <BriscolaClient playerID='1'/>
  </div>
); 

export default App;