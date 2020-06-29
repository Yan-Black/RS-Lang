import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disableStatisticBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';

const StatisticBtn: React.FC = () => {
  const statisticBtnState = useSelector((state: State) => state.engPuzzleControlBtns.statisticBtn);
  const dispatch = useDispatch();
  const statisticBtnStyle = statisticBtnState ? 'statistic' : 'statistic disabled';
  const clickHandler = () => dispatch(disableStatisticBtn());
  return (
    <button
      type="button"
      className={statisticBtnStyle}
      onClick={clickHandler}
    >
      Statistic
    </button>
  );
};
export default StatisticBtn;
