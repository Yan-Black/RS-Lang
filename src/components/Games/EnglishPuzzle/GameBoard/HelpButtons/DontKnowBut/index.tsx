/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableContinueBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';

interface Props {
  onClickFn: () => void;
  length: number;
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

const DontKnowBtn: React.FC<Props> = ({
  onClickFn, length, setCheckedStateToCards, setDragging,
}) => {
  const dontKnowBtnState = useSelector((state: State) => state.engPuzzleControlBtns.dontKnowBtn);
  const dispatch = useDispatch();
  const pushWordsToBoard = () => {
    onClickFn();
    setDragging(true);
    setCheckedStateToCards(new Array(length).fill('start-word true', 0, length));
    dispatch(enableContinueBtn());
  };
  const dontKnowBtnStyle = dontKnowBtnState
    ? 'show-correct-sentence'
    : 'show-correct-sentence disabled';
  return (
    <div className={dontKnowBtnStyle} onClick={pushWordsToBoard}>
      Don&apos;t know
    </div>
  );
};

export default DontKnowBtn;
