import React, { Component } from "react";
import TemplatePage from "./templatePage.js";
import { deck } from "./cards.js";

class HelpPage extends Component {
  render() {
    return (
      <TemplatePage
        content={
          <div className="help-frame">
            <h3 className="help-title">Cards</h3>
            <p className="help-text">
              Briscola is played with a standard Italian deck of cards. It
              consists of forty cards, divided into four suits: coins (
              <i>Denari</i> in Italian), swords <i>(Spade)</i>, cups{" "}
              <i>(Coppe)</i> and clubs <i>(Bastoni)</i>.
            </p>
            <p className="help-text">
              Below are the cards from the <i>Denari</i> suit, arranged from the
              weakest to strongest. Note the odd ranking of the three.
            </p>
            <div id="help-cards-gallery">
              {deck.slice(0, 10).map((x, index) => (
                <img
                  className={`gallery-card gallery-card-${index}`}
                  src={x.imagePath}
                  alt={x.alt}
                  key={index}
                />
              ))}
            </div>
            <h3 className="help-title">Gameplay</h3>
            <p className="help-text">
              The game of <i>Instant Briscola</i> begins as soon as two players
              are in the lobby. The deck is shuffled and each player is dealt
              three cards. The seventh card from the deck is the <i>briscola</i>{" "}
              - It represents the trump suit for the game and is placed face up
              on the board. The remainder of the deck is placed face down next
              to the <i>briscola</i> card and players will draw cards from it
              throughout the game.
            </p>
            <p className="help-text">
              In the <i>Instant Briscola</i> the player who created the lobby
              leads the first trick by playing one of his cards face up on the
              board. The card can be selected either by a mouse click or by
              pressing a corresponding keyboard key (keys 1-3). The opponent
              then responds with a card of his own and the played cards are
              compared at this point.
            </p>
            <p className="help-text">
              The winner of the trick is determined as follows: - If only one
              player played a <i>briscola</i>, he wins no matter what card the
              opponent played - If both players played a card of the same suit (
              <i>briscola</i> or any other suit), the winner is determined by
              comparing the strength of the played cards - If neither player
              played a <i>briscola</i> card and the played cards are not of the
              same suit, the player who was the first to play in the trick wins
              it
            </p>
            <p className="help-text">
              <i>
                (Keep in mind that in Briscola, players are not required to
                follow suit, that is, to play the same suit as the lead player.)
              </i>
            </p>
            <p className="help-text">
              The winner of the trick pockets both played cards and is dealt a
              new card from the top of the shuffled deck. The loser of the trick
              receives the next card from the deck and we enter the next trick
              where the winner of the last trick plays the first card. The play
              proceeds in this manner until the deck is empty. Note that the
              last card collected in the game should be the up-turned{" "}
              <i>briscola</i>. The fact that the <i>briscola</i> is now in the
              hand of one of the players does not change anything about the
              trump suit of the game and we proceed with playing until all forty
              cards are collected from the board. It is time to calculate the
              total point value of cards each player collected and determine a
              winner. Since there is a total of 120 points in the full Briscola
              deck, the player who collected at least 61 points wins the game.
            </p>
            <p className="help-text">
              If both players agree to a rematch, their positions are switched
              and a new game begins.
            </p>
          </div>
        }
      />
    );
  }
}

export default HelpPage;
