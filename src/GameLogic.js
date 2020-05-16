import { shuffledDeck } from './cards.js';

export const Briscola = {
  name: 'Briscola',

  setup: prepareGame,
  moves: { },

  phases: {
    draw: {
      moves: {
        /* There is no player moves in this short stage. Players are watching the cards
        being dealt to them and the briscola card to be set on the board. */
      },
      onBegin: (G, ctx) => {
        // The 'draw' phase only lasts a few seconds (depending on the length of the drawing aninmations).
  

        // Uporabi Object.keys => array [0,1]
        
        G.players['0'].cards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
        G.players['1'].cards = G.deckOnBoard.splice(G.deckOnBoard.length - 3, 3);
        G.briscola = G.deckOnBoard.pop();

        /* Each player receives three cards from the top of the deck and the seventh card
        from the shuffled deck becomes the briscola card of the game. */
      },

      next: 'play',
      start: true,
      endIf: G => G.briscola !== null

      /* As soon as the briscola card hits the board this phase ends and we move to the
      playing phase ('play'). */
    },

    play: {
      moves: { playCardOne },

      /* Players can now use the move 'PlayCard' - the only move that will be available to
      them in the game of Briscola. Each player plays one card. */
    },

    compare: {
      /* In this phase we will compare the played cards and declare the winner of the turn.
      The winner will take both played card and store them in his 'picked' array.
      The card from the top of the shuffled deck will then be added to his hand ('cards'),
      followed by the loser of the round receiving the next card from the top off the shuffled deck.
      Another short phase (a few seconds, depending on animations) with no player moves.

      From this point on the game is switching between 'play' and 'compare'. */

      moves: {}

    }
  },
};

function prepareGame() {
  return {
    players: {
      '0': {
        cards: [],
        picked: [],
        played: null
      },
      '1': {
        cards: [],
        picked: [],
        played: null
      }
    },

    briscola: null,
    deckOnBoard: shuffledDeck
    // The only object on the board at the start of the game is a shuffled deck of cards.
  };
};

function playCardOne(G, ctx) {
  //playerID => remove card from players cards array

  let currentPlayerID = ctx.currentPlayer;
    
  return console.log(`PlayerID ${currentPlayerID}`);
  
}




