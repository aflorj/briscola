import React from "react";
import { useTransition, animated } from "react-spring";

export default function Player(props) {
  let moves = props.gameData.moves;
  let cardsToRender = props.gameData.G["player_" + props.handID].cards;
  const transitions = useTransition(cardsToRender, (item) => item.alt, {
    from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0.5, transform: "tranlate3d(0, -100px, 0)" },
  });

  const playerBounty = props.gameData.G["player_" + props.handID].picked;
  let playerPoints = 0;
  playerBounty.forEach((card) => {
    playerPoints += card.points;
  });

  if (props.gameData.ctx.turn < 41) {
    return (
      <>
        <div className="hero-hand">
          {transitions.map((x, index, props) => {
            return (
              <div className="card-wrapper">
                <animated.img
                  className="playing-card"
                  src={x.item.imagePath}
                  alt={x.item.alt}
                  key={x.item.alt}
                  style={x.props}
                  onClick={() => {
                    moves.playCard(index);
                  }}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <div className="hero-hand">You {playerPoints === 60 ? "drew" : playerPoints < 60 ? "lost" : "won"} the game with {playerPoints} / 120 pts</div>
    );
  }
}
