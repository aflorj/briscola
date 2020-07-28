import React from 'react';

export default function Oponent(props) {
    let backside = '/images/backside.png';
    let ourplayer = props.handID;
    let p0cards = props.gameData.G.player_0.cards;
    let p1cards = props.gameData.G.player_1.cards;
    if (ourplayer === '0'){
        return (
        <>
        <div className="oponent-hand">
        {p1cards.map((x, index) =>
        <img src={backside} alt={'backside'} key={index} />)}
        </div>
        <div className="oponent-picked">
            <p>Pobrane karte villain</p>
        </div>
        </>
        )
    } else if (ourplayer === '1'){
        return (
        <>
        <div className="oponent-hand">
        {p0cards.map((x, index) =>
        <img src={backside} alt={'backside'} key={index} />)}
        </div>
        <div className="oponent-picked">
            <p>Pobrane karte villain</p>
        </div>
        </>
        )
    }
}
