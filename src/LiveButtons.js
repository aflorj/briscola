import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function LiveButtons({ delay, handID, gameData }) {
  const [isHidden, setIsHidden] = useState(true);
  const hero = handID;
  const villainID = !parseFloat(hero) ? 1 : 0;
  const playAgainPayload = [gameData.matchID, handID, gameData.credentials];

  console.log('to je gameData: ');
  console.log(gameData);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, delay);
  });

  return isHidden ? (
    ''
  ) : (
    <div className="hero-hand ease-in">
      <div id="menu-button-wrapper">
        <Link
          to={{
            pathname: '/rematch/',
            playAgainPayload: playAgainPayload,
            newPlayerID: villainID,
            key: gameData.matchID,
          }}
        >
          <div className="menu-button">
            <Trans>Rematch</Trans>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-button">
            <span>
              <Trans>Leave</Trans>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
