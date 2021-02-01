import React from 'react';
import { useTransition, animated } from 'react-spring';
import DemoButtons from './DemoButtons.js';
import LiveButtons from './LiveButtons.js';

export default function Hero(props) {
  const isDemo = props.demo;
  const turn = props.gameData.ctx.turn;
  const activePlayer = props.gameData.ctx.currentPlayer;
  const hero = props.handID;
  const moves = props.gameData.moves;

  const cardsToRender =
    props.gameData.G["player_" + (props.handID || "0")].cards;
  const transitions = useTransition(cardsToRender, (item) => item.alt, {
    from: { opacity: 0, transform: "translate3d(100px, 0px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    leave: { opacity: 0.5, transform: "tranlate3d(0, -30px, 0)" },
  });

  if (turn < 41) {
    return (
      <>
        <div
          className={
            activePlayer === hero ? "hero-hand-green" : "hero-hand"
          }
          id={
            cardsToRender.length === 2 ? "hero-two-cards" : "hero-other-cards"
          }
        >
          {transitions.map((x, index) => (
            <div
              className="card-wrapper"
              id={"wrapped-card-" + index}
              key={index}
            >
              <div className="transform-wrapper">
                <animated.img
                  className="hero-playing-card"
                  src={x.item.imagePath}
                  alt={x.item.alt}
                  key={x.item.alt}
                  style={x.props}
                  onClick={() => {
                    moves.playCard(index);
                  }}
                />
              </div>
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