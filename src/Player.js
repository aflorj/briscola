import React from 'react';

export default function Player(props) {
    let cardsToRender = props.gameData.G['player_' + props.handID].cards;
    return (
        <>
        <div className="hero-hand">
        {cardsToRender.map((x, index) =>
        <img src={x.imagePath} alt={x.alt} key={x.alt} onClick={() => {props.gameData.moves.playCard(index)}}/>)}
        </div>
        <div className="hero-picked">
            <p>Pobrane karte</p>
        </div>
        </>
    )
}
