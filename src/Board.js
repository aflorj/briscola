import React from 'react';
import Player from './Player.js';
import Oponent from './Oponent.js';
import Winscreen from './Winscreen.js';
import Middle from './Middle.js';
import './style.css';

export function Board(props) {
    if (props.ctx.turn < 41) {
    return (
        <>
        <span>Player{props.playerID} view <br /></span>
        <div className="board">
        <Oponent handID={props.playerID} gameData={props} />
        <Middle gameData={props} />
        <Player handID={props.playerID} gameData={props} />
        </div>
        </>
    )} else {
        return <Winscreen playerID={props.playerID} gameData={props} />
    }
}