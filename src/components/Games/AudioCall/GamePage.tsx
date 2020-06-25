/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { Link } from 'react-router-dom';
import { startPage, resetGame } from 'containers/Games/AudioCall/actions';
// import { useState } from 'react';
import speakerIcon from './speaker_Icon.svg';
// const logo = require("./speaker_Icon.svg");
// import speakerIcon from './megaphone.png';
// import speakerIcon from './0.svg';
import TranslateOptions from './translateOptions';
import GameButton from './GameButton';

function GamePage(): JSX.Element {
  const dispatch = useDispatch();
  const curGameProgress: number = useSelector((state: State) => state.audioCallAnswer.progress);
  // const progressBarWidth = ;
  // const words = useSelector((state: State) => state.audioCallCurrWords);
  // const round = useSelector((state: State) => state.audioCallRound);
  // const firstWordNumber = (+round % 2) === 0 ? 0 : 10;
  // const [gameRound, setGameRound] = useState(1);

  return (
    <div className="bg-info align-middle" style={{ height: '100vh' }}>
      <div className="progress bg-info" style={{ height: '5px' }}>
        <div className="progress-bar bg-light" role="progressbar" style={{ width: `${curGameProgress}%` }} aria-valuenow={curGameProgress} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="p-3 mb-2 bg-info text-white text-center align-items-center">
        <img src={speakerIcon} alt="" />
        <div className="p-3 bg-info text-right">
          <Link to="/Main" onClick={() => { dispatch(startPage()); dispatch(resetGame()); }}><i className="fas fa-times" /></Link>
        </div>
        <i className="fas fa-volume-up text-white my-5" style={{ cursor: 'pointer' }} />
        <TranslateOptions />
        <GameButton />
      </div>
    </div>

  );
}

export default GamePage;
