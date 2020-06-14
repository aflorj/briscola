import React from 'react';
import PlayedCard from './PlayedCard.js';
import CommunityCards from './CommunityCards.js';

export default function Middle(props) {
    return (
        <div className="middle">
        <PlayedCard handID='0' gameData={props}/>
        <PlayedCard handID='1' gameData={props}/>
        <CommunityCards gameData={props} />
        </div>
        )
    }