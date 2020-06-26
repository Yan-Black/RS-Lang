/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import {
  correctAnswer, wrongAnswer, checkAnswer, progressGame, knowWords, notKnowWords,
} from 'containers/Games/AudioCall/actions';
import { playSound } from './utils';

function TranslateOptions(): JSX.Element {
  const dispatch = useDispatch();
  const [clickedWord, setClickedWord] = useState('null');

  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const isCorrect = useSelector((state: State) => state.audioCallAnswer.isCorrect);
  const isWrong = useSelector((state: State) => state.audioCallAnswer.isWrong);

  const gameProgress = useSelector((state: State) => state.audioCallAnswer.progress);
  // const currActiveId = gameProgress < 10 ? gameProgress : 0;

  const currActiveId = isChecked ? gameProgress - 1 : gameProgress;
  const targetTranslate = currWords[currActiveId].wordTranslate;

  const optionClass = (word: string) => {
    if (isCorrect && word === targetTranslate) {
      return 'option bg-light text-success px-2 mx-5 border border-success';
    }
    if (isWrong && word === clickedWord) {
      return 'option bg-light text-danger px-2 mx-5 border border-danger';
    }
    if (isChecked && word !== targetTranslate) {
      return 'option bg-info mx-5 text-secondary';
    }
    if (isChecked && word === targetTranslate) {
      return 'option bg-info px-2 mx-5 border border-success';
    }
    return 'option bg-info mx-5';
  };
  // const [wordsList, setWordsList] = useState(currWords)

  return (

    <div className="options mb-5 d-flex flex-wrap justify-content-center bg-info text-white">
      { currWords[currActiveId].translateOptions.map((word, idx) => (
        <div
          className={optionClass(word)}
          role="button"
          key={+idx}
          id={word}
          style={{ cursor: 'pointer' }}
          onClick={(event) => {
            if (!isChecked) {
              const isAnswerCorrect = event.currentTarget.id === targetTranslate;
              const sound = isAnswerCorrect ? 'correct' : 'error';
              const funcToDispatch = isAnswerCorrect ? knowWords : notKnowWords;
              playSound(sound);
              setClickedWord(event.currentTarget.id);
              dispatch(funcToDispatch(currWords[currActiveId]));
              dispatch(checkAnswer(true));
              isAnswerCorrect ? dispatch(correctAnswer(true)) : dispatch(wrongAnswer(true));
              dispatch(progressGame());
            }
          }}
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
