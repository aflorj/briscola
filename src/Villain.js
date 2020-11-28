import React from "react";
import { useTransition, animated } from "react-spring";
import { Link } from 'react-router-dom';

export default function Villain(props) {
  const playAgainPayload = [props.gameData.matchID, props.gameData.playerID, props.gameData.credentials];
  const backside = "/images/backside.png";
  let hero = props.handID;
  let villainID = !(parseFloat(hero))? 1 : 0;
  let p0cards = props.gameData.G.player_0.cards;
  let p1cards = props.gameData.G.player_1.cards;

  function findVillainHand(heroID) {
    if (heroID === "0") {
      return p1cards;
    } else {
      return p0cards;
    }
  }

  const villainCardsToRender = findVillainHand(hero);
  const villainTransitions = useTransition(
    villainCardsToRender,
    (item) => item.alt,
    {
      from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0.5, transform: "tranlate3d(0, 30px, 0)" },
    }
  );

  if (props.gameData.ctx.turn < 41) {
    return (
      <>
        <div className="villain-hand" id={villainCardsToRender.length === 2 ? "villain-two-cards" : "villain-other-cards"}>
          {villainTransitions.map((x, index) => (
            <div className="villain-card-wrapper" id={"villain-wrapped-card-" + index}>
            <animated.img
              className="villain-playing-card"
              src={backside}
              alt="backside"
              key={index}
              style={x.props}
            />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="villain-hand-button">
      <Link to={{
        pathname: "/rematch/",
        playAgainPayload: playAgainPayload,
        newPlayerID: villainID,
      }}>
      <button className="menu-button">
      Rematch!
      </button>
      </Link>
        </div>
    );
  }
}
