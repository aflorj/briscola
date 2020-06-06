import React, { useState} from 'react';
import Player from './Player.js';
import './style.css';

export function Board(props) {
    const [gameData, setGameData] = useState(props)
    return (
        <div className="board">
        <Player handID='0' gameData={gameData}/>
        <Player handID='1' gameData={gameData}/>
        </div>
    );
}