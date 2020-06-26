/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableContinueBtn, enableDontKnowBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';
import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';

interface Props {
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  wordsToApply: Card[];
  wordsToCheck: Card[];
}

const CheckBtn: React.FC<Props> = ({ setCheckedStateToCards, wordsToApply, wordsToCheck }) => {
  const checkBtnState = useSelector((state: State) => state.engPuzzleControlBtns.checkBtn);
  const checkedCssState = new Array(wordsToApply.length);
  const dispatch = useDispatch();
  const checkBtnStyle = checkBtnState ? 'check' : 'check disabled';
  const clickHandler = () => {
    if (wordsToApply.every((_, i) => wordsToApply[i] === wordsToCheck[i])) {
      setCheckedStateToCards(checkedCssState.fill('start-word true', 0, checkedCssState.length));
      dispatch(enableContinueBtn());
    }
    for (let i = 0; i < wordsToApply.length; i++) {
      if (wordsToApply[i].word !== wordsToCheck[i].word) {
        checkedCssState[i] = 'start-word false';
      } else {
        checkedCssState[i] = 'start-word true';
      }
    }
    setCheckedStateToCards(checkedCssState);
    dispatch(enableDontKnowBtn());
  };
  return (
    <div className={checkBtnStyle} onClick={clickHandler}>
      Check
    </div>
  );
};

export default CheckBtn;
