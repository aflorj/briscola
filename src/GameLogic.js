import { shuffledDeck } from './cards.js';

export const Briscola = {
  name: 'Briscola',

  setup: prepareGame,

  moves: { },

  turn: {
    moveLimit: 1
  },

  phases: {

    draw: {
      moves: { },
      onBegin: (G, ctx) => {

        G.player_0.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
        G.player_1.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
        G.briscola = G.deckOnBoard.pop();

      },

      next: 'play',
      start: true,
      endIf: G => G.briscola !== null

    },

    play: {
      moves: { playCard },

    },

    compare: {
      moves: { }

    }
  },
};

function prepareGame() {
  return {
       player_0: {
        cards: [],
        picked: [],
        played: null
      },
        
      player_1: {
        cards: [],
        picked: [],
        played: null
      }, 

    briscola: null,
    deckOnBoard: shuffledDeck

  };
};


function playCard(G, ctx, cardID) {
  let playerID = 'player_' + ctx.currentPlayer;
  let currentPlayer = G[playerID];
  let cardToPlay = currentPlayer.cards[cardID];
  currentPlayer.played = currentPlayer.cards.splice(cardToPlay, 1);
}




