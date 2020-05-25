import React from 'react';
import Player from './Player.js';
import './style.css';

export function Board(props) {
    return (
        <div className="board">
        <Player playerID='0' props={props}/>
        <Player playerID='1' props={props}/>
        </div>
    );
}