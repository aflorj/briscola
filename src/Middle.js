import React, { useState, useEffect } from "react";
import CommunityCards from "./CommunityCards.js";
import { useTransition, animated } from "react-spring";

let reactSpringObject = {
  from: { opacity: 0, transform: "translate3d(0, 0px, 0)" },
  enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  leave: { opacity: 0, transform: "tranlate3d(-200px, 0px, 0)" },
};

export default function Middle(props) {
  const {
    middle,
    previousRound
  } = props.gameData.G;
  
  const renderTargets = {
    liveCards: middle,
    prevCards: previousRound,
    blank: []
  };
  
  const [currentTarget, setCurrentTarget] = useState(renderTargets.liveCards);

  useEffect(() => {
    let timer;
    
    if (middle.length === 0) {
      setCurrentTarget(renderTargets.prevCards);
      timer = setTimeout(() => {setCurrentTarget(renderTargets.blank)}, 2000);
    } else if (middle.length === 1) {
      setCurrentTarget(renderTargets.liveCards);
    }

    return () => clearTimeout(timer);
  }, [props.gameData.G.middle])
  
  const transitions = useTransition(
    currentTarget,
    (item) => item.alt,
    reactSpringObject
  );

  return (
    <>
      <div className="battleground">
        {transitions.map((x) => {
          return (
            <animated.img
              className="playing-card"
              src={x.item.imagePath}
              alt={x.item.alt}
              key={x.item.alt}
              style={x.props}
            />
          );
        })}
      </div>
      <div className="community-cards">
        <CommunityCards gameData={props} />
      </div>
    </>
  );
}