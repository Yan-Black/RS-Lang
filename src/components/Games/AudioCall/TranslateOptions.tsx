/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import {
  correctAnswer, wrongAnswer, checkAnswer, progressGame,
} from 'containers/Games/AudioCall/actions';
import { playSound } from './utils';

function TranslateOptions(): JSX.Element {
  const dispatch = useDispatch();
  const [clickedPosition, setClickedPosition] = useState(6);
  const correctAnswerPosition = 2;

  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const isCorrect = useSelector((state: State) => state.audioCallAnswer.isCorrect);
  const isWrong = useSelector((state: State) => state.audioCallAnswer.isWrong);

  const optionClass = (wordId: number) => {
    if (isCorrect && wordId === correctAnswerPosition) {
      return 'option bg-light text-success px-2 mx-5 border border-success';
    }
    if (isWrong && wordId === clickedPosition) {
      return 'option bg-light text-danger px-2 mx-5 border border-danger';
    }
    if (isChecked && wordId !== correctAnswerPosition) {
      return 'option bg-info mx-5 text-secondary';
    }
    if (isChecked && wordId === correctAnswerPosition) {
      return 'option bg-info px-2 mx-5 border border-success';
    }
    return 'option bg-info mx-5';
  };
  // const [wordsList, setWordsList] = useState(currWords)

  return (
    <div className="options mb-5 d-flex flex-wrap justify-content-center bg-info text-white">
      { currWords.slice(0, 5).map((word, idx) => (
        <div
          className={optionClass(idx)}
          role="button"
          key={+idx}
          id={idx.toString()}
          style={{ cursor: 'pointer' }}
          onClick={(event) => {
            if (!isChecked) {
              const isAnswerCorrect = event.currentTarget.id === correctAnswerPosition.toString();
              const sound = isAnswerCorrect ? 'correct' : 'error';
              playSound(sound);
              setClickedPosition(+event.currentTarget.id);
              dispatch(checkAnswer(true));
              isAnswerCorrect ? dispatch(correctAnswer(true)) : dispatch(wrongAnswer(true));
              dispatch(progressGame());
            }
          }}
        >
          <h4 className="my-2">
            {+idx + 1}
            &nbsp;&nbsp;
            {word.wordTranslate}
          </h4>
        </div>
      )) }
      {/* <div className={optionClass} style={{ cursor: 'pointer' }}>
        <span>
          1&nbsp;
          {currWords[0]}
        </span>

      </div>
      <div className={optionClass} style={{ cursor: 'pointer' }}>
        <span>
          2&nbsp;
          {currWords[1]}
        </span>

      </div>
      <div className={optionClass} style={{ cursor: 'pointer' }}>
        <span>
          3&nbsp;
          {currWords[2]}
        </span>

      </div>
      <div className={optionClass} style={{ cursor: 'pointer' }}>
        <span>
          4&nbsp;
          {currWords[3]}
        </span>

      </div>
      <div className={optionClass} style={{ cursor: 'pointer' }}>
        <span>
          5&nbsp;
          {currWords[4]}
        </span>

      </div> */}
    </div>
  );
}

export default TranslateOptions;
