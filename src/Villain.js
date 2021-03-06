import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

export default function Villain({ handID, gameData }) {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(true);
  const backside = '/images/backside.png';
  const hero = handID;
  const { turn } = gameData.ctx;
  const p0cards = gameData.G.player_0.cards;
  const p1cards = gameData.G.player_1.cards;

  useEffect(() => {
    if (turn === 41) {
      setTimeout(() => {
        setIsHidden(false);
      }, 3000);
    }
  }, [turn]);

  const playerBounty = gameData.G['player_' + (handID || '0')].picked;
  let playerPoints = 0;
  playerBounty.forEach((card) => {
    playerPoints += card.points;
  });

  function determineOutcome() {
    if (playerPoints < 60) {
      return t('Lost', { playerPoints });
    } else if (playerPoints === 60) {
      return t('Drew', { playerPoints });
    } else {
      return t('Won', { playerPoints });
    }
  }

  const villainCardsToRender = !parseFloat(hero) ? p1cards : p0cards;
  const villainTransitions = useTransition(
    villainCardsToRender,
    (item) => item.alt,
    {
      from: { opacity: 0, transform: 'translate3d(100px, 0px, 0)' },
      enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
      leave: { opacity: 0.5, transform: 'tranlate3d(0, 30px, 0)' },
    }
  );

  if (turn < 41) {
    return (
      <>
        <div
          className="villain-hand"
          id={
            villainCardsToRender.length === 2
              ? 'villain-two-cards'
              : 'villain-other-cards'
          }
        >
          {villainTransitions.map((x, index) => (
            <div
              className="villain-card-wrapper"
              id={'villain-wrapped-card-' + index}
              key={
                x.item.alt.charCodeAt(1) +
                x.item.suit.charCodeAt(1) +
                x.item.alt.charCodeAt(2)
              }
            >
              <animated.img
                className="villain-playing-card"
                src={backside}
                alt="backside"
                key={
                  x.item.alt.charCodeAt(1) * x.item.suit.charCodeAt(1) +
                  x.item.alt.charCodeAt(2)
                }
                style={x.props}
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return isHidden ? (
      ''
    ) : (
      <div className="villain-hand-game-over ease-in">{determineOutcome()}</div>
    );
  }
}
