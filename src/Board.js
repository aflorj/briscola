import React from 'react';
import Player from './Player.js';
import './style.css';

<<<<<<< HEAD
export function Board(props) {    
    
    return (
        <div className="board">
        <Player />
        <Player />
=======
export function Board(props) {
    return (
        <div className="board">
        <Player playerID='0' props={props}/>
        <Player playerID='1' props={props}/>
>>>>>>> 4975340be36963ea093b2ac7c98c2208f35e0248
        </div>
    );
}