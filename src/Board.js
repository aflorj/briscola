import React from "react";
import Player from "./Player.js";
import Oponent from "./Oponent.js";
import Middle from "./Middle.js";
import TurnIndicator from "./TurnIndicator.js";
import './styles/board.css';

export default function Board(props) {
    return (
      <>
      <TurnIndicator props={props}/>
        <div className="board">
          <Oponent handID={props.playerID} gameData={props} />
          <Middle handID={props.playerID} gameData={props} />
          <Player handID={props.playerID} gameData={props} />
        </div>
      </>
    )
}