import React from "react";
// import PlayedCard from "./PlayedCard.js";
import CommunityCards from "./CommunityCards.js";
import { useTransition, animated } from "react-spring";

export default function Middle(props) {
  let cardsToRender = props.gameData.G.middle;
  const transitions = useTransition(cardsToRender, (item) => item.alt, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0, transform: "tranlate3d(-200px, 0px, 0)" },
  });
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

/* <PlayedCard handID="0" gameData={props} />
    <PlayedCard handID="1" gameData={props} /> */
