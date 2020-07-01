import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCollection, removeCollection, updateOffsetX, removeOffsetX, setToSolved, setToNewGame,
} from 'containers/Games/EnglishPuzzle/GameBoard/actions';
import { updatePage, updateGrop } from 'containers/Games/EnglishPuzzle/SettingsBlock/actions';
import { enableDontKnowBtn, enableResultsBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { incrementIdx, setToInitial } from 'containers/Games/EnglishPuzzle/StartPage/actions';
import { State } from 'models/state';
import '../index.scss';
import { setToUserPreferencies } from 'containers/Games/EnglishPuzzle/HintButtons/actions';
import { countXOffsets } from 'components/Games/EnglishPuzzle/Constants';
import { reomveFailed, reomveSuccess, closeResults } from 'containers/Games/EnglishPuzzle/GameBoard/Results/actions';
import { ContinueBtnProps } from '../../Models';

const ContinueBtn: React.FC<ContinueBtnProps> = ({
  wordsToApply, setCheckedStateToCards, setDragging,
}) => {
  const continueBtnState = useSelector((state: State) => state.engPuzzleControlBtns.continueBtn);
  const page: number = useSelector((state: State) => state.engPuzzlePage.page);
  const group: number = useSelector((state: State) => state.engPuzzleGroup.group);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  const dispatch = useDispatch();
  const updateCardsCollection = () => {
    dispatch(updateCollection(wordsToApply));
    dispatch(updateOffsetX(countXOffsets(wordsToApply.length)));
    dispatch(incrementIdx());
  };
  const removeCardsCollection = () => {
    dispatch(removeCollection());
    dispatch(removeOffsetX());
    dispatch(setToInitial());
  };
  const clickHandler = () => {
    setCheckedStateToCards(new Array(wordsToApply.length).fill('start-word', 0, wordsToApply.length));
    setDragging(false);
    dispatch(setToUserPreferencies());
    if (isSolved) {
      dispatch(closeResults());
      removeCardsCollection();
      dispatch(setToNewGame());
      dispatch(enableDontKnowBtn());
      dispatch(reomveFailed());
      dispatch(reomveSuccess());
      if (group === 6 && page === 60) {
        return;
      }
      if (page === 60) {
        dispatch(updateGrop((group + 1)));
        dispatch(updatePage(1));
      }
      dispatch(updatePage((page + 1)));
    } else if (activeIdx === 9) {
      dispatch(setToSolved());
      dispatch(enableResultsBtn());
      setTimeout(() => dispatch(removeCollection()), 800);
    } else {
      updateCardsCollection();
      dispatch(enableDontKnowBtn());
    }
  };
  const continueBtnStyle = continueBtnState ? 'help-button' : 'help-button disabled';
  return (
    <button
      type="button"
      className={continueBtnStyle}
      onClick={clickHandler}
    >
      Continue
    </button>
  );
};

export default ContinueBtn;
