import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableStatisticBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';
import { openResults } from 'containers/Games/EnglishPuzzle/GameBoard/Results/actions';

const ResultsBtn: React.FC = () => {
  const resultsBtnState = useSelector((state: State) => state.engPuzzleControlBtns.resultsBtn);
  const dispatch = useDispatch();
  const resultsBtnStyle = resultsBtnState ? 'help-button' : 'help-button disabled';
  const clickHandler = () => {
    dispatch(openResults());
    dispatch(enableStatisticBtn());
  };
  return (
    <button
      type="button"
      className={resultsBtnStyle}
      onClick={clickHandler}
    >
      Results
    </button>
  );
};

export default ResultsBtn;
