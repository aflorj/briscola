import React from 'react';
import Player from './Player.js';
import Battlefield from './Battlefield.js';
import CommunityCards from './CommunityCards.js';
import './style.css';

export function Board(props) {
    return (
        <div className="board">
        <Player />
        <Battlefield />
        <Player />
        <CommunityCards />
        </div>
    );
}