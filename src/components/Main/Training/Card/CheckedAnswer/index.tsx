import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { toggleAnswerChecked } from 'containers/Main/Training/actions';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/Models';
import book1 from 'assets/WordsData';

function CheckedAnswer(): JSX.Element {
  const dispatch = useDispatch();
  const isAnswerChecked = useSelector((state: State) => state.training.isChecked);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  const index = useSelector((state: State) => state.training.currIndex);
  const data: FetchedWordData = book1[0][index];
  const [checkedAnswerClass, setCheckedAnswerClass] = useState('checked-answer');
  const inputWord: string = useSelector((state: State) => state.training.inputWord);
  const correctWord = data.word;
  if (!isAnswerChecked) return null;

  let mistakes = 0;
  for (let i = 0; i < correctWord.length; i += 1) {
    if (correctWord[i] !== inputWord[i]) mistakes += 1;
  }

  const correctColor = 'text-success';
  const wrongColor = mistakes < 3 ? 'text-warning' : 'text-danger';

  if (checkedAnswerClass === 'checked-answer' && !isAnswerCorrect) {
    setTimeout(() => {
      setCheckedAnswerClass('checked-answer-half-transparent');
    }, 1000);
  }

  const clickHandler = () => {
    dispatch(toggleAnswerChecked());
    setCheckedAnswerClass('checked-answer');
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => event.preventDefault();

  return (
    <div
      className={checkedAnswerClass}
      role="button"
      tabIndex={-1}
      id="checked-answer"
      onClick={clickHandler}
      onKeyPress={keyPressHandler}
    >
      {
        inputWord.split('').map((el: string, id) => (
          <span
            className={el === correctWord[id] ? correctColor : wrongColor}
            key={(new Date()).toDateString() + id.toString()}
          >
            {el}
          </span>
        ))
      }
    </div>
  );
}

export default CheckedAnswer;
