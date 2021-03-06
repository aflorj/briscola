import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PreviousTrick({ gameData, handID }) {
  const { t } = useTranslation();
  const { turn } = gameData.ctx;
  const heroID = parseInt(handID);
  const firstCard = gameData.G.previousRound[0];
  const secondCard = gameData.G.previousRound[1];
  const previousTrickNum = Math.ceil(turn / 2) - 1;

  if (turn > 2 && turn < 41) {
    const bounty = firstCard.points + secondCard.points;
    const { winner } = gameData.G;

    function buildTrickWinnerMessage() {
      let message = '';
      if (heroID === winner) {
        message += t('You won the trick ');
      } else {
        message += t('Your opponent won the trick ');
      }
      if (bounty === 0) {
        message += t('(no points)');
      } else if (bounty === 2) {
        message += t('Bounty for two points', { bounty });
      } else if (bounty === 3 || bounty === 4) {
        message += t('Bounty for three or four points', { bounty });
      } else {
        message += t('Bounty for more than four points', { bounty });
      }
      return message;
    }

    return (
      <>
        <button id="previous-trick" className="lang-button">
          {t('Previous trick')}
          <div id="previous-trick-tooltip">
            <p>{t('Previous trick info', { previousTrickNum })}</p>
            <img
              className="previous-card"
              src={firstCard.imagePath}
              alt={firstCard.alt}
              key={firstCard.alt}
            />
            <img
              className="previous-card"
              src={secondCard.imagePath}
              alt={secondCard.alt}
              key={secondCard.alt}
            />
            <p>{buildTrickWinnerMessage()}</p>
          </div>
        </button>
      </>
    );
  } else {
    return null;
  }
}
