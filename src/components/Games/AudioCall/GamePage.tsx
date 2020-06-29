/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { Link } from 'react-router-dom';
import { startPage, resetGame } from 'containers/Games/AudioCall/actions';
// import { useState } from 'react';
// import speakerIcon from './speaker_Icon.svg';
// const logo = require("./speaker_Icon.svg");
// import speakerIcon from './megaphone.png';
// import speakerIcon from './0.svg';
import TranslateOptions from './translateOptions';
import GameButton from './GameButton';
import TargetWordBlock from './TargetWordBlock';
import backgroundImage from '../../../assets/pattern-369543.svg';
// import ModalMessage from './ModalMessage';

function GamePage(): JSX.Element {
  const dispatch = useDispatch();
  const currActiveId: number = useSelector((state: State) => state.audioCallAnswer.progress);
  const currGameProgress: number = currActiveId * 10;

  const exitClickHandler = () => {
    dispatch(startPage());
    dispatch(resetGame());
  };

  return (
    <div className="align-middle" style={{ height: '100vh', background: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      {/* <ModalMessage /> */}
      <div className="progress bg-transparent" style={{ height: '5px' }}>
        <div className="progress-bar bg-light" role="progressbar" style={{ width: `${currGameProgress}%` }} aria-valuenow={currGameProgress} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="px-3 mb-2 text-white text-center align-items-center">
        <div className="px-3 text-right">
          <Link to="/Main" onClick={exitClickHandler}><i className="fas fa-times text-white" /></Link>
        </div>
        <TargetWordBlock />
        <TranslateOptions />
        <GameButton />
      </div>
      {/* <audio>
        <source />
      </audio> */}
    </div>

  );
}

export default GamePage;
