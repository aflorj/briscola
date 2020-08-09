import React from "react";

// refactor for 0 and 1

export default function Oponent(props) {
  let backside = "/images/backside.png";
  let ourplayer = props.handID;
  let p0cards = props.gameData.G.player_0.cards;
  let p1cards = props.gameData.G.player_1.cards;
  if (ourplayer === "0") {
    return (
      <>
        <div className="oponent-hand">
          {p1cards.map((x, index) => (
            <img
              className="playing-card"
              src={backside}
              alt={"backside"}
              key={index}
            />
          ))}
        </div>
      </>
    );
  } else if (ourplayer === "1") {
    return (
      <>
        <div className="oponent-hand">
          {p0cards.map((x, index) => (
            <img
              className="playing-card"
              src={backside}
              alt={"backside"}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
}
