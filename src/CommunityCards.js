import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function CommunityCards({ gameData }) {
  const { turn } = gameData.ctx;
  const { briscola } = gameData.G;
  const remainingCards = gameData.G.deckOnBoard.length;

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });
  const fadeOut = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.3 },
    config: config.slow,
  });
  const fadeAway = useSpring({
    from: { opacity: 0.3 },
    to: { opacity: 0 },
    config: config.slow,
  });

  return (
    <div className="community-cards">
      <animated.div
        id="bpc-wrapper"
        style={turn < 35 ? fadeIn : turn !== 41 ? fadeOut : fadeAway}
      >
        <img
          className="briscola-playing-card"
          src={briscola.imagePath}
          alt={briscola.alt}
          key={briscola.alt}
        />
      </animated.div>
      <animated.div id="deck-wrapper" style={turn < 35 ? fadeIn : fadeAway}>
        <img
          className="deck-card"
          src={turn < 35 ? `/images/backside-${remainingCards}.png` : ''}
          alt="backside"
        />
      </animated.div>
    </div>
  );
}
