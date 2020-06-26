/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCollection, removeCollection } from 'containers/Games/EnglishPuzzle/GameBoard/actions';
import { updatePage, updateGrop } from 'containers/Games/EnglishPuzzle/SettingsBlock/actions';
import { enableDontKnowBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { incrementIdx, setToInitial } from 'containers/Games/EnglishPuzzle/StartPage/actions';
import { State } from 'models/state';
import { Card } from '../../../GameBlock/types';
import '../index.scss';

interface Props {
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContinueBtn: React.FC<Props> = ({ wordsToApply, setCheckedStateToCards, setDragging }) => {
  const continueBtnState = useSelector((state: State) => state.engPuzzleControlBtns.continueBtn);
  const page: number = useSelector((state: State) => state.engPuzzlePage.page);
  const group: number = useSelector((state: State) => state.engPuzzleGroup.group);
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
  const clickHandler = () => {
    setCheckedStateToCards(new Array(wordsToApply.length).fill('start-word', 0, wordsToApply.length));
    setDragging(false);
    if (activeIdx === 9) {
      removeCardsCollection();
      if (group === 6 && page === 60) {
        return;
      }
      if (page === 60) {
        dispatch(updateGrop((group + 1)));
        dispatch(updatePage(1));
      }
      dispatch(updatePage((page + 1)));
    }
    updateCardsCollection();
    dispatch(enableDontKnowBtn());
  };
  const continueBtnStyle = continueBtnState ? 'continue' : 'continue disabled';
  return (
    <div
      className={continueBtnStyle}
      onClick={clickHandler}
    >
      Continue
    </div>
  );
};

export default ContinueBtn;
