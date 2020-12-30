import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

export default function LiveButtons(props) {
  const [isHidden, setIsHidden] = useState(true);
  const hero = props.handID;
  const villainID = !parseFloat(hero) ? 1 : 0;
  const playAgainPayload = [
    props.gameData.matchID,
    props.gameData.playerID,
    props.gameData.credentials,
  ];

  useEffect(() => {
      setTimeout(() => {
          setIsHidden(false)
      }, props.delay)
  });

  return isHidden ? '' : (
    <div className="villain-hand-button ease-in">
      <div id="menu-button-wrapper">
        <Link
          to={{
            pathname: "/rematch/",
            playAgainPayload: playAgainPayload,
            newPlayerID: villainID,
          }}
        >
          <div className="menu-button">
            <Trans>Rematch</Trans>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-button">
            <span>
              <Trans>Leave</Trans>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
