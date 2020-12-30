import React from 'react';
import { useTransition, animated } from 'react-spring';
import DemoButtons from './DemoButtons.js';
import LiveButtons from './LiveButtons.js';

export default function Villain(props) {
  const isDemo = props.demo;
  const backside = "/images/backside.png";
  const hero = props.handID;
  const turn = props.gameData.ctx.turn;
  const p0cards = props.gameData.G.player_0.cards;
  const p1cards = props.gameData.G.player_1.cards;

  const villainCardsToRender = !parseFloat(hero) ? p1cards : p0cards;
  const villainTransitions = useTransition(
    villainCardsToRender,
    (item) => item.alt,
    {
      from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0.5, transform: "tranlate3d(0, 30px, 0)" },
    }
  );

  if (turn < 41) {
    return (
      <>
        <div
          className="villain-hand"
          id={
            villainCardsToRender.length === 2
              ? "villain-two-cards"
              : "villain-other-cards"
          }
        >
          {villainTransitions.map((x, index) => (
            <div
              className="villain-card-wrapper"
              id={"villain-wrapped-card-" + index}
              key={index}
            >
              <animated.img
                className="villain-playing-card"
                src={backside}
                alt="backside"
                key={Math.random()}
                style={x.props}
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    if (isDemo) {
      return (
        <DemoButtons delay={3000}/>
      );
    } else {
      return (
        <LiveButtons delay={3000} gameData={props.gameData} handID={hero}/>
      );
    }
  }
}
