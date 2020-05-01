import React from 'react';
import { Client } from 'boardgame.io/react';
import { shuffledDeck } from './cards';

const Briscola = {
  setup: () => ({
    deckOnBoard: shuffledDeck,
    playerOneCards: [],
    playerOnePicked: [],
    playerOneThrows: null,
    playerTwoCards: [],
    playerTwoPicked: [],
    playerTwoThrows: null,
    headToHead: [],
    briscola: null
  }),
}

const App = Client({ game: Briscola });

export default App;

// shuffledDeck.splice(shuffledDeck.length - 3, 3)
// Use this to deal first round of the cards to each player.