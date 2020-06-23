/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCollection, removeCollection } from 'containers/Games/EnglishPuzzle/GameBoard/actions';
import { Card } from '../../../GameBlock/types';
import { enableDontKnowBtn } from '../../../../../../containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { incrementIdx, setToInitial } from '../../../../../../containers/Games/EnglishPuzzle/StartPage/actions';
import { State } from '../../../../../../models/state';
import '../index.scss';

interface Props {
  wordsToApply: Card[];
}

const ContinueBtn: React.FC<Props> = ({ wordsToApply }) => {
  const continueBtnState = useSelector((state: State) => state.engPuzzleControlBtns.continueBtn);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const dispatch = useDispatch();
  const updateCardsCollection = () => {
    dispatch(updateCollection(wordsToApply));
    dispatch(incrementIdx());
  };
  const removeCardsCollection = () => {
    dispatch(removeCollection());
    dispatch(setToInitial());
  };
  const continueBtnStyle = continueBtnState ? 'continue' : 'continue disabled';
  return (
    <div
      className={continueBtnStyle}
      onClick={() => {
        activeIdx === 9
          ? removeCardsCollection()
          : updateCardsCollection();
        dispatch(enableDontKnowBtn());
      }}
    >
      Continue
    </div>
  );
};

export default ContinueBtn;
