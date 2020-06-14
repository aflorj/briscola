import React from 'react';

export default function PlayedCard(props) {
    let gameData = props.gameData.gameData;
    let cardOwner = props.handID;
    let card = gameData.G['player_' + cardOwner].played;
    if (card === null) {
        return (null)
    } else {
        return (
            <div className='playedCard'>
                <img src={card.imagePath} alt={card.alt} key={card.alt}/>
            </div>
        )
    }
}