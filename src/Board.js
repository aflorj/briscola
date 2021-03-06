import React, { useState } from 'react';
import Hero from './Hero.js';
import Villain from './Villain.js';
import Middle from './Middle.js';
import HelpModal from './HelpModal.js';
import PreviousTrick from './PreviousTrick.js';
import Chat from './Chat.js';
import './styles/board.css';
import { Trans } from 'react-i18next';

export default function Board({ playerID, demo, ...props }) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="board">
        <Villain handID={playerID} gameData={props} />
        <Middle handID={playerID} gameData={props} />
        <Hero handID={playerID} gameData={props} demo={demo} />
      </div>
      <button
        id="ingame-help"
        className="lang-button"
        onClick={() => setModalOpen(true)}
      >
        <Trans>Help</Trans>
      </button>
      <PreviousTrick gameData={props} handID={playerID} />
      <HelpModal modalState={isModalOpen} toggleModal={setModalOpen} />
      <Chat props={props} demo={demo} handID={playerID} />
    </>
  );
}
