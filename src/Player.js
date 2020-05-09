import React from 'react';
import ThreeCards from './ThreeCards.js';
import './style.css';

export default function Player(props) {
    let G = props.G;
    return (
        <div className="player">
        <ThreeCards G={G}/>
        </div>
    )
}
