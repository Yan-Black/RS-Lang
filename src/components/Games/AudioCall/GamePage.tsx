/* eslint-disable jsx-a11y/media-has-caption */
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
import TargetWordBlock from './TargetWordBlock';

function GamePage(): JSX.Element {
  const dispatch = useDispatch();
  const currActiveId: number = useSelector((state: State) => state.audioCallAnswer.progress);
  const currGameProgress: number = currActiveId * 10;
  // const currWords = useSelector((state: State) => state.audioCallCurrWords);
  // const currGameRound = +gameProgress + 1;
  // const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);

  // if (!isChecked && currActiveId !== 10) {
  //   const audioUrl: string = currWords[currActiveId].audio;
  //   const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioUrl}`;
  //   const audio = new Audio(url);
  //   audio.play();
  // }

  // function playAudio() {
  //
  //   return audio.play();
  // }

  // if (!isChecked && currActiveId !== 10) {
  //   void playAudio();
  // }

  // const round = useSelector((state: State) => state.audioCallRound);
  // const firstWordNumber = (+round % 2) === 0 ? 0 : 10;
  // const [gameRound, setGameRound] = useState(1);

  return (
    <div className="bg-info align-middle" style={{ height: '100vh' }}>
      <div className="progress bg-info" style={{ height: '5px' }}>
        <div className="progress-bar bg-light" role="progressbar" style={{ width: `${currGameProgress}%` }} aria-valuenow={currGameProgress} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="px-3 mb-2 bg-info text-white text-center align-items-center">
        <img src={speakerIcon} alt="" />
        <div className="px-3 bg-info text-right">
          <Link to="/Main" onClick={() => { dispatch(startPage()); dispatch(resetGame()); }}><i className="fas fa-times text-white" /></Link>
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
