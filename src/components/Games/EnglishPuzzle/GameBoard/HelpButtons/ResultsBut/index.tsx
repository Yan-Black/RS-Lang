/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableStatisticBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';

const ResultsBtn: React.FC = () => {
  const resultsBtnState = useSelector((state: State) => state.engPuzzleControlBtns.resultsBtn);
  const dispatch = useDispatch();
  const resultsBtnStyle = resultsBtnState ? 'results' : 'results disabled';
  const clickHandler = () => dispatch(enableStatisticBtn());
  return (
    <div className={resultsBtnStyle} onClick={clickHandler}>
      Results
    </div>
  );
};

export default ResultsBtn;
