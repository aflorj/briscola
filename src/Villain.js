import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

export default function Villain(props) {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(true);
  const backside = "/images/backside.png";
  const hero = props.handID;
  const turn = props.gameData.ctx.turn;
  const p0cards = props.gameData.G.player_0.cards;
  const p1cards = props.gameData.G.player_1.cards;

  useEffect(() => {
    if (turn === 41) {
      setTimeout(() => {
        setIsHidden(false);
      }, 3000);
    }
  }, [turn]);

  const playerBounty = props.gameData.G["player_" + (props.handID || "0")].picked;
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

  const villainCardsToRender = !parseFloat(hero) ? p1cards : p0cards;
  const villainTransitions = useTransition(
    villainCardsToRender,
    (item) => item.alt,
    {
      from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0.5, transform: "tranlate3d(0, 30px, 0)" },
    }
  );

  if (turn < 41) {
    return (
      <>
        <div
          className="villain-hand"
          id={
            villainCardsToRender.length === 2
              ? "villain-two-cards"
              : "villain-other-cards"
          }
        >
          {villainTransitions.map((x, index) => (
            <div
              className="villain-card-wrapper"
              id={"villain-wrapped-card-" + index}
              key={index}
            >
              <animated.img
                className="villain-playing-card"
                src={backside}
                alt="backside"
                key={Math.random()}
                style={x.props}
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return isHidden ? (
      ""
    ) : (
      <div className="villain-hand-game-over ease-in">{determineOutcome()}</div>
    );
  }
}