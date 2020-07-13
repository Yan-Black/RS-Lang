import * as React from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { openModal, setModalInfo } from 'containers/Main/actions';
import { InitialStateModalInfo } from 'containers/Main/models';
import { CardProps } from '../models';

const GameCard: React.FC<CardProps> = ({
  route, cardId, name, imgSrc, modalId, desc,
}) => {
  const dispatch = useDispatch();
  const modalInfo: InitialStateModalInfo = {
    modalId,
    name,
    desc,
  };
  const modalHandler = () => {
    dispatch(openModal());
    dispatch(setModalInfo(modalInfo));
  };
  return (
    <div className="game-card" id={cardId}>
      <Link to={`/${route}`} className="game-link">
        <p className="game-name">{name}</p>
      </Link>
      <img src={imgSrc} alt="Game Card" />
      <button
        type="button"
        onClick={modalHandler}
        className="about-game"
      >
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
    </div>
  );
};
export default GameCard;
