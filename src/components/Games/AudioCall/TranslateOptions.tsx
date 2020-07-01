/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import {
  correctAnswer, wrongAnswer, checkAnswer, progressGame, knowWords, notKnowWords,
} from 'containers/Games/AudioCall/actions';
import { playSound } from './utils';

function TranslateOptions(): JSX.Element {
  const dispatch = useDispatch();
  // const [clickedWord, setClickedWord] = useState('null');

  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const selectedWord = useSelector((state: State) => state.audioCallAnswer.selectedWord);
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const isCorrect = useSelector((state: State) => state.audioCallAnswer.isCorrect);
  const isWrong = useSelector((state: State) => state.audioCallAnswer.isWrong);

  const gameProgress = useSelector((state: State) => state.audioCallAnswer.progress);
  // const currActiveId = gameProgress < 10 ? gameProgress : 0;

  const currActiveId = isChecked ? gameProgress - 1 : gameProgress;
  const targetTranslate = currWords[currActiveId].wordTranslate;

  const optionClass = (word: string) => {
    if (isCorrect && word === targetTranslate) {
      return 'option bg-light text-success px-2 mx-5 mt-1 border border-success';
    }
    if (isWrong && word === selectedWord) {
      return 'option bg-light text-danger px-2 mx-5 mt-1 border border-danger';
    }
    if (isChecked && word !== targetTranslate) {
      return 'option mx-5 mt-1 text-dark';
    }
    if (isChecked && word === targetTranslate) {
      return 'option px-2 mx-5 mt-1 border border-success';
    }
    return 'option mx-5 px-2 mt-1';
  };
  // const [wordsList, setWordsList] = useState(currWords)

  function hovered(event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>): void {
    // event.currentTarget.classList.add('border');
    if (!isChecked) { event.currentTarget.classList.add('shadow'); /* event.currentTarget.classList.add('bg-secondary'); */ }
  }

  function unHovered(event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>): void {
    // event.currentTarget.classList.remove('border');
    if (!isChecked) { event.currentTarget.classList.remove('shadow'); /* event.currentTarget.classList.remove('bg-secondary'); */ }
  }

  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isChecked) {
      const isAnswerCorrect = event.currentTarget.id === targetTranslate;
      const sound = isAnswerCorrect ? 'correct' : 'error';
      const funcToDispatch = isAnswerCorrect ? knowWords : notKnowWords;
      playSound(sound);
      // setClickedWord(event.currentTarget.id);
      dispatch(funcToDispatch(currWords[currActiveId]));
      dispatch(checkAnswer(event.currentTarget.id));
      isAnswerCorrect ? dispatch(correctAnswer(true)) : dispatch(wrongAnswer(true));
      dispatch(progressGame());
    }
  };

  const mouseOverHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => hovered(event);
  const mouseLeaveHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => unHovered(event);
  const focusHandler = (event: React.FocusEvent<HTMLDivElement>) => hovered(event);
  // const keyPressHandler = (event) => {
  //   if (event.key === 'Enter') clickHandler(event);
  // };

  return (

    <div className="options mb-5 d-flex flex-wrap justify-content-center text-white">
      { currWords[currActiveId].translateOptions.map((word, idx) => (
        <div
          className={optionClass(word)}
          role="button"
          key={+idx}
          id={word}
          tabIndex={0}
          style={{ cursor: 'pointer' }}
          onClick={clickHandler}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          onFocus={focusHandler}
          // onKeyPress={keyPressHandler}
        >
          <h4 className="my-2">
            {+idx + 1}
            &nbsp;&nbsp;
            {word}
          </h4>
        </div>
      )) }
    </div>
  );
}

export default TranslateOptions;
