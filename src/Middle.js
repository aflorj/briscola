import React from "react";
import CommunityCards from "./CommunityCards.js";
import { useTransition, animated } from "react-spring";

let reactSpringObject = {
  from: { opacity: 0, transform: "translate3d(0, 0px, 0)" },
  enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  leave: { opacity: 0, transform: "tranlate3d(-200px, 0px, 0)" },
};

export default function Middle(props) {
  let cardsToRender = props.gameData.G.middle;
  const transitions = useTransition(
    cardsToRender,
    (item) => item.alt,
    reactSpringObject
  );
  let previousToRender = props.gameData.G.previousRound;
  const transitionsP = useTransition(
    previousToRender,
    (item) => item.alt,
    reactSpringObject
  );

  if (props.gameData.G.middle.length === 0) {
    return (
      <>
        <div className="battleground">
          {transitionsP.map((x) => {
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
  } else {
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
}
