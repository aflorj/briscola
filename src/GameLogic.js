import { shuffledDeck } from './cards.js';

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
      moves: { playCard },
      next: 'compare',
      endIf: G => G.player_0.played !== null && G.player_1.played !== null

    },

    compare: {
      moves: { },
      onBegin: evaluate,
      next: 'play',

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
    deckOnBoard: shuffledDeck,

  };
};


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
    //pobere tist, ka je igrau prvi (oz. winnerOfLastRound)
  }

};