import React, { useState, useEffect } from 'react';
import CommunityCards from './CommunityCards.js';
import { useTransition, animated } from 'react-spring';

export default function Middle(props) {
  const { middle, previousRound } = props.gameData.G;
  const winner = props.gameData.G.winner;
  const heroID = parseInt(props.handID);

  const renderTargets = {
    liveCards: middle,
    prevCards: previousRound,
    blank: [],
  };

  const [currentTarget, setCurrentTarget] = useState(renderTargets.liveCards);
  const [currentTargetKey, setCurrentTargetKey] = useState('liveCards');

  useEffect(() => {
    let timer;
    if (middle.length === 0) {
      setCurrentTarget(renderTargets.prevCards);
      setCurrentTargetKey(winner === heroID ? 'prevCards hero-won' : 'prevCards villain-won');
      timer = setTimeout(() => {
        setCurrentTarget(renderTargets.blank);
        setCurrentTargetKey('blank');
      }, 2500);
    } else if (middle.length === 1) {
      setCurrentTarget(renderTargets.liveCards);
      setCurrentTargetKey('liveCards');
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [props.gameData.G.middle]);

  const reactSpringObject = {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0, transform: "tranlate3d(-200px, 0px, 0)" },
  };
  
  const transitions = useTransition(
    currentTarget,
    (item) => item.alt,
    reactSpringObject
  );

  return (
    <>
      <div className="battleground">
        {transitions.map((x, index) => {
          return (
            <animated.img
              className={`middle-playing-card ${currentTargetKey}`}
              id={`mid-card-${index}`}
              src={x.item.imagePath}
              alt={x.item.alt}
              key={x.item.alt}
              style={x.props}
            />
          );
        })}
      </div>
      <CommunityCards gameData={props} />
    </>
  );
}
