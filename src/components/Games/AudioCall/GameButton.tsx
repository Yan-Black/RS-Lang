import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  statisticPage, checkAnswer, resetGame, progressGame,
} from 'containers/Games/AudioCall/actions';
import { State } from 'models';

function GameButton(): JSX.Element {
  const dispatch = useDispatch();
  // const words = useSelector((state: State) => state.audioCallCurrWords);
  // const round = useSelector((state: State) => state.audioCallRound);
  // const firstWordNumber = (+round % 2) === 0 ? 0 : 10;
  const [gameRound, setGameRound] = useState(0);
  // const [buttonTitle, setButtonTitle] = useState('НЕ ЗНАЮ');
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  // const actionToDispatch = gameRound === 10 ? statisticPage() : checkAnswer(false);

  if (isChecked) {
    return (
      <button
        className="btn btn-outline-light px-5"
        type="button"
        onClick={() => {
          // console.log(gameRound);
          if (gameRound === 10) {
            setGameRound(0);
            dispatch(resetGame());
            dispatch(statisticPage());
          }
          dispatch(checkAnswer(false));
        }}
      >
        ⟹
      </button>
    );
  }

  return (
    <button
      className="btn btn-outline-light px-5"
      type="button"
      onClick={() => {
        // console.log(gameRound);
        setGameRound(gameRound + 1);
        dispatch(checkAnswer(true));
        dispatch(progressGame());
      }}
    >
      НЕ ЗНАЮ
    </button>
  );
}

// onClick={() => dispatch(statisticPage())
export default GameButton;
