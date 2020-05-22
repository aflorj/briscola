import React from 'react';
import Player from './Player.js';
import './style.css';

export function Board(props) {    
    
    return (
        <div className="board">
        <Player />
        <Player />
        </div>
    );
}