import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { Board } from './Board.js';
import { Briscola } from './GameLogic.js';
import React from 'react';

const BriscolaClient = Client({
  game: Briscola,
  board: Board,
  multiplayer: Local()
});

const App = () => (
  <div>
    <BriscolaClient />
  </div>
); 

export default App;