/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableContinueBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';

const CheckBtn: React.FC = () => {
  const checkBtnState = useSelector((state: State) => state.engPuzzleControlBtns.checkBtn);
  const dispatch = useDispatch();
  const checkBtnStyle = checkBtnState ? 'check' : 'check disabled';
  const clickHandler = () => dispatch(enableContinueBtn());
  return (
    <div className={checkBtnStyle} onClick={clickHandler} />
  );
};

export default CheckBtn;
