import { shuffledDeck } from "./cards.js";

export const Briscola = {
  name: "Briscola",

  setup: prepareGame,

  phases: {
    draw: {
      moves: {},
      onBegin: (G) => {
        G.player_0.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
        G.player_1.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
        G.briscola = G.deckOnBoard.pop();
      },

      next: "play",
      start: true,
      endIf: (G) => G.briscola !== null,
    },

    play: {
      turn: {
        order: {
          first: (G) => G.winner,
          next: (G) => G.loser,
        },
      },
      moves: { playCard },
      next: "compare",
      endIf: (G) => G.player_0.played !== null && G.player_1.played !== null,
    },

    compare: {
      moves: {},
      onBegin: evaluate,
      endIf: (G) => G.evaluated === true,
      onEnd: cleanup,
      next: "play",
    },
  },

  minPlayers: 2,
  maxPlayers: 2,
  
  endIf: (G, ctx) => {
    let p0bounty = G.player_0.picked;
    let p1bounty = G.player_1.picked;
    let p0points = 0;
    let p1points = 0;
    if (ctx.turn === 41) {
      
      p0bounty.forEach((card) => {
        p0points += card.points;
      });
      p1bounty.forEach((card) => {
        p1points += card.points;
      });
      console.log("The game has concluded with the following result:");
      console.log("Player_0 finished the game with " + p0points + " points.");
      console.log("Player_1 finished the game with " + p1points + " points.");
    }
    // tu das return in kar hoces, da je na koncu igre dosegljivo v ctx.gameover
  },
};

function prepareGame() {
  return {
    player_0: {
      cards: [],
      picked: [],
      played: null,
    },

    player_1: {
      cards: [],
      picked: [],
      played: null,
    },

    briscola: null,
    deckOnBoard: shuffledDeck,
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],

    //experimental
    previousRound: []
  };
}

function playCard(G, ctx, cardID) {
  let playerID = "player_" + ctx.currentPlayer;
  let currentPlayer = G[playerID];
  currentPlayer.played = currentPlayer.cards.splice(cardID, 1)[0];
  G.middle.push(currentPlayer.played);
  ctx.events.endTurn();
}

function evaluate(G) {
  let briscola = G.briscola;
  let p0 = G.player_0.played;
  let p1 = G.player_1.played;
  let p0picked = G.player_0.picked;
  let p1picked = G.player_1.picked;

    // experimetal
    G.previousRound[0] = G["player_" + G.winner].played;
    G.previousRound[1] = G["player_" + G.loser].played;

  if (p0.suit === p1.suit) {
    if (p0.strength > p1.strength) {
      console.log(
        "Both played cards have the same suit. P0 takes the round due to the higher strength of his card."
      );
      p0picked.push(p0);
      p0picked.push(p1);
      G.winner = 0;
      G.loser = 1;
      G.evaluated = true;
    } else {
      console.log(
        "Both played cards have the same suit. P1 takes the round due to the higher strength of his card."
      );
      p1picked.push(p0);
      p1picked.push(p1);
      G.winner = 1;
      G.loser = 0;
      G.evaluated = true;
    }
  } else if (briscola.suit === p0.suit && briscola.suit !== p1.suit) {
    console.log("P0 won the round by playing a bricola card.");
    p0picked.push(p0);
    p0picked.push(p1);
    G.winner = 0;
    G.loser = 1;
    G.evaluated = true;
  } else if (briscola.suit !== p0.suit && briscola.suit === p1.suit) {
    console.log("P1 won the round by playing a bricola card.");
    p1picked.push(p0);
    p1picked.push(p1);
    G.winner = 1;
    G.loser = 0;
    G.evaluated = true;
  } else {
    console.log(
      "Neither of the played cards are a briscola card and the cards are not of the same suit. Winner of the last round wins the round."
    );
    let winnerOfLastRound = "player_" + G.winner;
    G[winnerOfLastRound].picked.push(p0);
    G[winnerOfLastRound].picked.push(p1);
    G.evaluated = true;
  }
}

function cleanup(G) {
  G.player_0.played = null;
  G.player_1.played = null;
  G.middle = [];
  G.evaluated = false;
  console.log(
    "Cards were moved from 'played' to the winner's 'picked' array and a cleanup was performed."
  );
  let prvoKarto = "player_" + G.winner;
  let drugoKarto = "player_" + G.loser;
  if (G.deckOnBoard.length > 1) {
    G[prvoKarto].cards.push(
      G.deckOnBoard.splice(G.deckOnBoard.length - 1, 1)[0]
    );
    G[drugoKarto].cards.push(
      G.deckOnBoard.splice(G.deckOnBoard.length - 1, 1)[0]
    );
    console.log(
      "Both players received a new card from the deck. Entering a new round."
    );
  } else if (G.deckOnBoard.length === 1) {
    G[prvoKarto].cards.push(
      G.deckOnBoard.splice(G.deckOnBoard.length - 1, 1)[0]
    );
    G[drugoKarto].cards.push(G.briscola);
    console.log(
      "The last card from the deck has been delt so briscola card goes to the loser of the last round. Entering a new round."
    );
  } else {
    console.log(
      "The deck is empty - No more cards to deal. Entering a new round."
    );
  }
}