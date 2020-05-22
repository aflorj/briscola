import { shuffledDeck } from './cards.js';
import { TurnOrder } from 'boardgame.io/core';

export const Briscola = {
  name: 'Briscola',

  setup: prepareGame,

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
<<<<<<< HEAD
      moves: { 
        playCardOne
      
      },
=======
      moves: { playCard },
      next: 'compare',
      endIf: G => G.player_0.played !== null && G.player_1.played !== null
>>>>>>> 4975340be36963ea093b2ac7c98c2208f35e0248

    },

    compare: {
      moves: { },
      onBegin: evaluate,
      next: 'play',

    }
  },
  turn: {
    
  }
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
    deckOnBoard: shuffledDeck,
<<<<<<< HEAD
    // The only object on the board at the start of the game is a shuffled deck of cards.
=======
>>>>>>> 4975340be36963ea093b2ac7c98c2208f35e0248

  };
};

<<<<<<< HEAD
function playCardOne(G, ctx, cardId) {
  console.log()
}

// {
//   "numPlayers": 2,
//   "turn": 1,
//   "currentPlayer": "0",
//   "playOrder": [
//     "0",
//     "1"
//   ],
//   "playOrderPos": 0,
//   "phase": "play",
//   "activePlayers": null,
//   "numMoves": 0
// }
=======

function playCard(G, ctx, cardID) {
  let playerID = 'player_' + ctx.currentPlayer;
  let currentPlayer = G[playerID];
  let cardToPlay = currentPlayer.cards[cardID];
  currentPlayer.played = currentPlayer.cards.splice(cardToPlay, 1)[0];
  ctx.events.endTurn();
  // Dodal tisto nulo na koncu, ker splice naredi array, mi pa rabmo v played samo object
  // Dodal endTurn event v ta move
};

function evaluate(G, ctx) {
  let briscola = G.briscola;
  let p0 = G.player_0.played;
  let p1 = G.player_1.played;

  if (p0.suit === p1.suit) {
    if (p0.strength > p1.strength) {
      // dej karte p0
    } else {
      // dej karte p1
    }
  } else if (briscola.suit === p0.suit && briscola.suit !== p1.suit) {
    // dej karte p0
  } else if (briscola.suit !== p0.suit && briscola.suit === p1.suit) {
    //dej karte p1
  } else {
    //pobere tist, ka je igrau prvi (lahko tud winnerOfLastRound)
  }

};
>>>>>>> 4975340be36963ea093b2ac7c98c2208f35e0248
