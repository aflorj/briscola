import React from 'react';
import './style.css';


export default function Oponent(props) {
    let cardsToRender = props.gameData.G['player_' + props.handID].cards;
    return (
        <div className="oponent">
        {cardsToRender.map((x, index) =>
        <img src={x.imagePath} alt={x.alt} key={x.alt} onClick={() => {props.gameData.moves.playCard(index)}}/>)}
        </div>
    )
}
