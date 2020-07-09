import * as React from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function showModal(event) {
  const cardId = event.target.closest('DIV').getAttribute('id');
  let modal;
  if (cardId === 'card-1') {
    modal = document.getElementById('modal-1');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-2') {
    modal = document.getElementById('modal-2');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-3') {
    modal = document.getElementById('modal-3');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-4') {
    modal = document.getElementById('modal-4');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-5') {
    modal = document.getElementById('modal-5');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-6') {
    modal = document.getElementById('modal-6');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-7') {
    modal = document.getElementById('modal-7');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-8') {
    modal = document.getElementById('modal-8');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-9') {
    modal = document.getElementById('modal-9');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-10') {
    modal = document.getElementById('modal-10');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-11') {
    modal = document.getElementById('modal-11');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  } else if (cardId === 'card-12') {
    modal = document.getElementById('modal-12');
    modal.style.display = 'block';
    const modalHint = modal.firstChild;
    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close-button');
    closeButton.innerText = 'X';
    modalHint.append(closeButton);
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalHint.removeChild(closeButton);
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function GameCard(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  {
    cardId, name, imgSrc, modalId, desc,
  },
) {
  return (
    <div className="game-card" id={cardId}>
      <p className="game-name">{name}</p>
      <img src={imgSrc} alt="Game Card" />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <FontAwesomeIcon icon={faQuestionCircle} className="about-game" onClick={showModal} tabIndex={0} role="button" aria-label="Show modal" />
      <div style={{ display: 'none' }} id={modalId} className="modal-main">
        <div className="modal-hint">
          <div className="hint-title">{name}</div>
          <div className="hint-descr">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
