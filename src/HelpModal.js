import React, { useState } from 'react';
import { denari, spade, coppe, bastoni } from './cards.js';
import Modal from 'react-modal';
import { Trans, useTranslation } from 'react-i18next';
Modal.setAppElement("#root");

export default function HelpModal({ modalState, toggleModal }) {
  const suits = [denari, spade, coppe, bastoni];
  const [suitIndex, setSuitIndex] = useState(1);
  const { t } = useTranslation();

  function increaseSuitIndex() {
    if (suitIndex > 2) {
      setSuitIndex(0);
    } else {
      setSuitIndex(suitIndex + 1);
    }
  }

  function decreaseSuitIndex() {
    if (suitIndex === 0) {
      setSuitIndex(3);
    } else {
      setSuitIndex(suitIndex - 1);
    }
  }

  return (
    <>
      <Modal
        id="help-modal"
        isOpen={modalState}
        onRequestClose={() => toggleModal(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="help-frame">
          <h3 className="help-title">{t("Cards")}</h3>
          <p className="help-text">
            <Trans>Help_text_1</Trans>
          </p>
          <p className="help-text">
            <Trans>Help_text_2</Trans>
            <span className="inline-arrow" onClick={() => decreaseSuitIndex()}>
              {"◄"}
            </span>
            <b>{t(suits[suitIndex][0].suit)}</b>
            <span className="inline-arrow" onClick={() => increaseSuitIndex()}>
              {"►"}
            </span>
            <Trans>Help_text_3</Trans>
          </p>
          <div id="help-cards-gallery">
            {suits[suitIndex].map((x, index) => (
              <img
                className={`gallery-card gallery-card-${index}`}
                src={x.imagePath}
                alt={x.alt}
                key={index}
              />
            ))}
          </div>
          <div id="help-cards-tooltips">
            {suits[suitIndex].map((x, index) => (
              <div
                className={`gallery-card-tooltip gallery-card-tooltip-${index}`}
                key={index}
              >
              <Trans>{x.alt}</Trans>
              <br />
              <Trans>{x.points > 0 ? x.points + ' points' : ''}</Trans>
              </div>
            ))}
          </div>
          <h3 className="help-title">{t("Gameplay")}</h3>
          <p className="help-text">
            <Trans>Help_text_4</Trans>
          </p>
          <p className="help-text">
            <Trans>Help_text_5</Trans>
          </p>
          <p className="help-text">
            <Trans>Help_text_6</Trans>
          </p>
          <p className="help-text">
            <i>
              <Trans>Help_text_7</Trans>
            </i>
          </p>
          <p className="help-text">
            <Trans>Help_text_8</Trans>
          </p>
          <p className="help-text">
            <Trans>Help_text_9</Trans>
          </p>
        </div>
        <div id="close-modal" onClick={() => toggleModal(false)}>
          <img src="/images/close.png" alt="close modal" id="close-image"/>
        </div>
      </Modal>
    </>
  );
}
