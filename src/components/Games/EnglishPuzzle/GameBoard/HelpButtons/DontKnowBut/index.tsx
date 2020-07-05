import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableContinueBtn } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';
import {
  audioEnabled, translateEnable, backgroundEnable, speakerEnable, speakerDisable,
} from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';
import { addFailed } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/actions';
import { DontKnowBtnProps } from 'components/Games/EnglishPuzzle/models';
import { pronounceAudio } from 'components/Games/EnglishPuzzle/Constants';

const DontKnowBtn: React.FC<DontKnowBtnProps> = ({
  onClickFn, length, setCheckedStateToCards, setDragging, phrase, learningWord,
}) => {
  const dontKnowBtnState = useSelector((state: State) => state.engPuzzleControlBtns.dontKnowBtn);
  const phraseToSpeak = [];
  phrase.forEach((card) => phraseToSpeak.push(card.word));
  const dispatch = useDispatch();
  const pushWordsToBoard = () => {
    onClickFn();
    setDragging(true);
    setCheckedStateToCards(new Array(length).fill('start-word true', 0, length));
    dispatch(audioEnabled());
    dispatch(translateEnable());
    dispatch(backgroundEnable());
    dispatch(enableContinueBtn());
    dispatch(addFailed({ sentence: phraseToSpeak.join(' '), learning: learningWord }));
    pronounceAudio(true, phraseToSpeak.join(' '), dispatch, speakerEnable, speakerDisable);
  };
  const dontKnowBtnStyle = dontKnowBtnState
    ? 'help-button'
    : 'help-button disabled';
  return (
    <button
      type="button"
      className={dontKnowBtnStyle}
      onClick={pushWordsToBoard}
    >
      Don&apos;t know
    </button>
  );
};

export default DontKnowBtn;
