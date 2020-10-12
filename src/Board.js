import React from "react";
import Hero from "./Hero.js";
import Villain from "./Villain.js";
import Middle from "./Middle.js";
import TurnIndicator from "./TurnIndicator.js";
import "./styles/board.css";

export default function Board(props) {
  return (
    <>
      <TurnIndicator props={props} />
      <div className="board">
        <Villain handID={props.playerID} gameData={props} />
        <Middle handID={props.playerID} gameData={props} />
        <Hero handID={props.playerID} gameData={props} />
      </div>
    </>
  );
}