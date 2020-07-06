import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  statisticPage, checkAnswer, resetGame, progressGame, notKnowWords,
} from 'containers/Games/AudioCall/actions';
import { State } from 'models';

function GameButton(): JSX.Element {
  const dispatch = useDispatch();
  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const currActiveId = useSelector((state: State) => state.audioCallAnswer.progress);

  const btnNextClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (currActiveId >= 10) {
      dispatch(resetGame());
      dispatch(statisticPage());
    } else {
      dispatch(checkAnswer('null'));
    }
  };

  const btnDoNotKnowClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(notKnowWords(currWords[currActiveId]));
    dispatch(checkAnswer('null'));
    dispatch(progressGame());
  };

  if (isChecked) {
    return (
      <button
        tabIndex={-1}
        className="btn btn-outline-light px-5"
        type="button"
        onClick={btnNextClickHandler}
      >
        ⟹
      </button>
    );
  }

  return (
    <button
      tabIndex={-1}
      className="btn btn-outline-light px-5"
      type="button"
      onClick={btnDoNotKnowClickHandler}
    >
      НЕ ЗНАЮ
    </button>
  );
}

export default GameButton;
