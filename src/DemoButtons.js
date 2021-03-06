import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function DemoButtons({ delay }) {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, delay);
  });

  return isHidden ? (
    ''
  ) : (
    <div className="hero-hand ease-in">
      <div id="menu-button-wrapper">
        <div
          className="menu-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          <Trans>Another demo</Trans>
        </div>
        <Link to="/">
          <div className="menu-button">
            <span>
              <Trans>Back to menu</Trans>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
