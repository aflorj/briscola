import React from "react";
import { useSpring, animated, config } from 'react-spring';

export default function CommunityCards(props) {
  const turn = props.gameData.gameData.ctx.turn;
  const fadeIn = useSpring( {from: {opacity: 0}, to: {opacity: 1}, config: config.slow});
  const fadeOut = useSpring( {from: {opacity: 1}, to: {opacity: 0.3}, config: config.slow});
  const fadeAway = useSpring( {from: {opacity: 0.3}, to: {opacity: 0}, config: config.slow});
  let briscola = props.gameData.gameData.G.briscola;
  return (
    <animated.div className="community-cards" style={turn < 34 ? fadeIn : turn !== 41 ? fadeOut : fadeAway}>
      <img
        className="playing-card"
        src={briscola.imagePath}
        alt={briscola.alt}
        key={briscola.alt}
      />
    </animated.div>
  );
}