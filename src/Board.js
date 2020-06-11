import React from 'react';
import Player from './Player.js';
import Oponent from './Oponent.js';
import Winscreen from './Winscreen.js';
import './style.css';

export function Board(props) {
    if (props.ctx.turn < 41) {
    return (
        <div className="board">
        <div>Player{props.playerID} view</div>
        <span>Oponent on the top:</span>
        <Oponent handID={props.playerID} gameData={props} />
        <span>Player on the bottom:</span>
        <Player handID={props.playerID} gameData={props} />
        </div>
    )} else {
        return <Winscreen playerID={props.playerID} gameData={props} />
    }
}