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
      moves: { playCard },
      next: 'compare',
      endIf: G => G.player_0.played !== null && G.player_1.played !== null

    },

    compare: {
      moves: { },
      onBegin: evaluate,
      next: 'play',
      onEnd: cleanup
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

  };
};


function playCard(G, ctx, cardID) {
  let playerID = 'player_' + ctx.currentPlayer;
  let currentPlayer = G[playerID];
  currentPlayer.played = currentPlayer.cards.splice(cardID, 1)[0];
  ctx.events.endTurn();
};

function evaluate(G, ctx) {
  let briscola = G.briscola;
  let p0 = G.player_0.played;
  let p1 = G.player_1.played;
  let p0picked = G.player_0.picked;
  let p1picked = G.player_1.picked;

  // TODO
  // endPhase ne dela, treba je nrdit se turn order.
  
  if (p0.suit === p1.suit) {
    if (p0.strength > p1.strength) {
      console.log('suit enak, po moci pobere p0');
      p0picked.push(p0);
      p0picked.push(p1);
      ctx.events.endPhase();

        } else {
      console.log('suit enak, po moci pobere p1');
      p1picked.push(p0);
      p1picked.push(p1);
      ctx.events.endPhase();
    }
  } else if (briscola.suit === p0.suit && briscola.suit !== p1.suit) {
    console.log('p0 ima briscolo in pobere');
    p0picked.push(p0);
    p0picked.push(p1);
    ctx.events.endPhase();

  } else if (briscola.suit !== p0.suit && briscola.suit === p1.suit) {
    console.log('p1 ima briscolo in pobere');
    p1picked.push(p0);
    p1picked.push(p1);
    ctx.events.endPhase();

  } else {
    console.log('Pobere WOLR')
    let winnerOfLastRound = 'player_' + ctx.playOrder[0];
    G[winnerOfLastRound].picked.push(p0);
    G[winnerOfLastRound].picked.push(p1);
    ctx.events.endPhase();
  }

};

function cleanup(G){
  G.player_0.played = null;
  G.player_1.played = null;
}

/* ctx.events.endTurn({ next: playerID }); */