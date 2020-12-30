import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useTranslation } from "react-i18next";

export default function Player(props) {
  const [isHidden, setIsHidden] = useState(true);
  const turn = props.gameData.ctx.turn;
  const { t } = useTranslation();
  const activePlayer = props.gameData.ctx.currentPlayer;
  const heroPlayer = props.handID;
  const moves = props.gameData.moves;

  useEffect(() => {
    if (turn === 41) {
      setTimeout(() => {
        setIsHidden(false);
      }, 3000);
    }
  }, [turn]);

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

  const cardsToRender =
    props.gameData.G["player_" + (props.handID || "0")].cards;
  const transitions = useTransition(cardsToRender, (item) => item.alt, {
    from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0.5, transform: "tranlate3d(0, -30px, 0)" },
  });

  const playerBounty =
    props.gameData.G["player_" + (props.handID || "0")].picked;
  let playerPoints = 0;
  playerBounty.forEach((card) => {
    playerPoints += card.points;
  });

  function determineOutcome() {
    if (playerPoints < 60) {
      return t("Lost", { playerPoints });
    } else if (playerPoints === 60) {
      return t("Drew", { playerPoints });
    } else {
      return t("Won", { playerPoints });
    }
  }

  if (turn < 41) {
    return (
      <>
        <div
          className={
            activePlayer === heroPlayer ? "hero-hand-green" : "hero-hand"
          }
          id={
            cardsToRender.length === 2 ? "hero-two-cards" : "hero-other-cards"
          }
        >
          {transitions.map((x, index) => (
            <div
              className="card-wrapper"
              id={"wrapped-card-" + index}
              key={index}
            >
              <div className="transform-wrapper">
                <animated.img
                  className="hero-playing-card"
                  src={x.item.imagePath}
                  alt={x.item.alt}
                  key={x.item.alt}
                  style={x.props}
                  onClick={() => {
                    moves.playCard(index);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return isHidden ? (
      ""
    ) : (
      <div className="hero-hand ease-in">{determineOutcome()}</div>
    );
  }
}
