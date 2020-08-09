import React from "react";
import { useSpring, animated, config } from 'react-spring';

export default function CommunityCards(props) {
  const fadeIn = useSpring( {from: {opacity: 0}, to: {opacity: 1}, config: config.slow});
  let briscola = props.gameData.gameData.G.briscola;
  return (
    <animated.div className="community-cards" style={fadeIn}>
      <img
        className="playing-card"
        src={briscola.imagePath}
        alt={briscola.alt}
        key={briscola.alt}
      />
    </animated.div>
  );
}