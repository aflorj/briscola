import React from 'react';
import './style.css';

export default function Oponent(props) {
    let ourplayer = props.handID;
    let p0cards = props.gameData.G.player_0.cards;
    let p1cards = props.gameData.G.player_1.cards;
    let backsideUrl = '/images/backside.jpg';
    if (ourplayer === '0'){
        return (
        <div className="oponent">
        <span>Oponent:<br/></span>
        {p1cards.map((x, index) =>
        <img src={backsideUrl} alt={'backside'} key={index} />)}
        </div>
        )
    } else if (ourplayer === '1'){
        return (
        <div className="oponent">
         <span>Oponent:<br/></span>
        {p0cards.map((x, index) =>
        <img src={backsideUrl} alt={'backside'} key={index} />)}
        </div>
        )
    }
}
