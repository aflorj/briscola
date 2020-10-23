import React, { useEffect } from "react";
import { useTransition, animated } from "react-spring";

export default function Player(props) {
  let moves = props.gameData.moves;

  useEffect(() => {
    const keyPressHandler = (e) => {
      const key = Number(e.key);
      if (key >= 1 && key <= 3) {
        moves.playCard(key - 1);
      }
    };

    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [moves]);

  let cardsToRender = props.gameData.G["player_" + props.handID].cards;
  const transitions = useTransition(cardsToRender, (item) => item.alt, {
    from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0.5, transform: "tranlate3d(0, -30px, 0)" },
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
          {transitions.map((x, index, props) => (
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
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="hero-hand">
        You {playerPoints === 60 ? "drew " : playerPoints < 60 ? "lost " : "won "}
        the game by scoring {playerPoints} out of possible 120 points.
      </div>
    );
  }
}
