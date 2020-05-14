import React, { useState } from 'react';
import Player from './Player.js';
import Battlefield from './Battlefield.js';
import CommunityCards from './CommunityCards.js';
import './style.css';

export function Board(props) {
    const [state, setstate] = useState(props);
    let playerID = state.playerID;
    console.log(state.G.players[playerID].cards);
    return (
        <div className="board">
        <Player playerID="0" />
        <Battlefield />
        <Player playerID="1" />
        <CommunityCards />
        </div>
    );
}