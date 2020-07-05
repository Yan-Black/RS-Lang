import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import {
  toggleModal, resetGame, statisticPage, checkAnswer, notKnowWords, progressGame,
  knowWords, correctAnswer, wrongAnswer,
} from 'containers/Games/AudioCall/actions';
import { useEffect } from 'react';
import backgroundImage from 'assets/pattern-369543.svg';
import TranslateOptions from './translateOptions';
import GameButton from './GameButton';
import TargetWordBlock from './TargetWordBlock';
import ModalMessage from './ModalMessage';
import { playSound } from './utils';

function GamePage(): JSX.Element {
  const dispatch = useDispatch();

  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const currActiveId: number = useSelector((state: State) => state.audioCallAnswer.progress);
  const currGameProgress: number = currActiveId * 10;

  let textInput: HTMLDivElement = null;
  useEffect(() => {
    textInput.focus();
  });

  const exitClickHandler = () => {
    dispatch(toggleModal('exit'));
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      dispatch(toggleModal('exit'));
    }
  };

  const keyBoardPressHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && isChecked) {
      if (currActiveId >= 10) {
        dispatch(resetGame());
        dispatch(statisticPage());
      } else dispatch(checkAnswer('null'));
    }
    if (event.key === 'Enter' && !isChecked) {
      dispatch(notKnowWords(currWords[currActiveId]));
      dispatch(checkAnswer('null'));
      dispatch(progressGame());
    }
    if (!isChecked && (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5')) {
      const selected = currWords[currActiveId].translateOptions[+event.key - 1];
      const isAnswerCorrect = currWords[currActiveId].wordTranslate
      === currWords[currActiveId].translateOptions[+event.key - 1];
      const sound = isAnswerCorrect ? 'correct' : 'error';
      const funcToDispatch = isAnswerCorrect ? knowWords : notKnowWords;
      // eslint-disable-next-line no-void
      void playSound(sound);
      dispatch(funcToDispatch(currWords[currActiveId]));
      dispatch(checkAnswer(selected));

      if (isAnswerCorrect) {
        dispatch(correctAnswer(true));
      } else dispatch(wrongAnswer(true));

      dispatch(progressGame());
    }
  };

  return (
    <div
      className="align-middle"
      id="game-page"
      tabIndex={0}
      role="button"
      ref={(button) => { textInput = button; }}
      style={{
        height: '100vh', background: `url(${backgroundImage})`, backgroundSize: 'cover', cursor: 'default', overflow: 'scroll',
      }}
      onKeyPress={keyBoardPressHandler}
    >
      <ModalMessage />
      <div className="progress bg-transparent" style={{ height: '5px' }}>
        <div className="progress-bar bg-light" role="progressbar" aria-label="Progress bar" style={{ width: `${currGameProgress}%` }} aria-valuenow={currGameProgress} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="px-3 mb-2 text-white text-center align-items-center">
        <div className="p-3 text-right">
          <i className="fas fa-times text-white" role="button" aria-label="Times icon" tabIndex={-1} onClick={exitClickHandler} onKeyPress={keyPressHandler} />
        </div>
        <TargetWordBlock />
        <TranslateOptions />
        <GameButton />
      </div>
    </div>

  );
}

export default GamePage;
