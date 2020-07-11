import React from 'react';
import './styles/style.css';

export default function Winscreen(props) {
    let playerID = props.playerID;
    return (
        <div>
        <p>Player{playerID} picked {props.gameData.G['player_' + playerID].picked.length} cards worth a total of x points: (rendras pobrane karte)</p>
        </div>
    )
}
