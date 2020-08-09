import React from 'react';

export default function TurnIndicator(props) {
    let indicator = '/images/turn_indicator.png';
    if (props.props.ctx.currentPlayer === props.props.playerID) {
        return (
            <div id="hero-turn">
                <img src={indicator} alt={"turn indicator"}></img>
            </div>
        )} else {
            return (
                <div id="villain-turn">
                     <img src={indicator} alt={"turn indicator"}></img>
                </div>
            )
        }
    }