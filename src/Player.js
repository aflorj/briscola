import React from 'react';
import ThreeCards from './ThreeCards.js';
import './style.css';

export default function Player(props) {
    let passingDown = props.passingDown;
    return (
        <div className="player">
        <ThreeCards passingDown={passingDown}/>
        </div>
    )
}