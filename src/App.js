import React from 'react';
import { Client } from 'boardgame.io/react';
import { shuffledDeck } from './cards';


const Briscola = {
  name: 'Briscola',

  setup: () => ({
    playerOneCards: [],
    playerOnePicked: [],
    playerTwoCards: [],
    playerTwoPicked: [],
    headToHead: [],
    briscola: null,
    deckOnBoard: shuffledDeck,
  }),

  moves: { PlayCard, GiveCards },

};




function GiveCards(G, ctx) {
  G.playerOneCards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
};

function PlayCard(G, ctx, cardId) {
  G.headToHead = G.playerOneCards.splice(cardId,1);
};

const App = Client({ game: Briscola });

export default App;