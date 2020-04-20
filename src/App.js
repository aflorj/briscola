import React from 'react';
import { Client } from 'boardgame.io/react';

const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell: (G, ctx, id) => {
      G.cells[id] = ctx.currentPlayer;
    },
  },
};

const App = Client({ game: TicTacToe });

export default App;