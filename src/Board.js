import React, { useState } from 'react';
import Hero from './Hero.js';
import Villain from './Villain.js';
import Middle from './Middle.js';
import HelpModal from './HelpModal.js';
import PreviousTrick from './PreviousTrick.js';
import Chat from './Chat.js';
import './styles/board.css';
import { Trans } from 'react-i18next';

export default function Board(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="board">
        <Villain handID={props.playerID} gameData={props} />
        <Middle handID={props.playerID} gameData={props} />
        <Hero handID={props.playerID} gameData={props} demo={props.demo} />
      </div>
      <button
        id="ingame-help"
        className="lang-button"
        onClick={() => setModalOpen(true)}
      >
        <Trans>Help</Trans>
      </button>
      <PreviousTrick gameData={props} handID={props.playerID} />
      <HelpModal modalState={isModalOpen} toggleModal={setModalOpen} />
      <Chat props={props} demo={props.demo} />
    </>
  );
}