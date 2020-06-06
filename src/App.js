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
    <span>Player 0 view:</span>
    <BriscolaClient playerID="0"/>
    <span>Player 1 view:</span>
    <BriscolaClient playerID="1"/>
  </div>
); 

export default App;