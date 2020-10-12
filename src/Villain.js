import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import RematchLobby from "./rematchLobby.js";


export default function Villain(props) {
  const [showRematchLobby, setRematchLobby] = useState(false);
  const nextRoomID = [props.gameData.gameID, props.gameData.playerID, props.gameData.credentials];
  let backside = "/images/backside.png";
  let hero = props.handID;
  let p0cards = props.gameData.G.player_0.cards;
  let p1cards = props.gameData.G.player_1.cards;

  function findVillain(heroID) {
    if (heroID === "0") {
      return p1cards;
    } else {
      return p0cards;
    }
  }

  const villainCardsToRender = findVillain(hero);
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
        <div className="villain-hand">
          {villainTransitions.map((x, index, props) => (
            <animated.img
              className="playing-card"
              src={backside}
              alt={"backside"}
              key={index}
              style={x.props}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="villain-hand-button">
          {showRematchLobby ?
          <RematchLobby nextRoomID={nextRoomID}/> :
          <button onClick={() => { setRematchLobby(true) }}>Play again</button>
          }
        </div>
      </>
    );
  }
}
