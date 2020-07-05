import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models/state';
import { enableContinueBtn, enableDontKnowBtn } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/actions';
import {
  audioEnabled, translateEnable, backgroundEnable, speakerEnable, speakerDisable,
} from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';
import { addSuccess } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/actions';
import { CheckBtnProps } from 'components/Games/EnglishPuzzle/models';
import { pronounceAudio } from 'components/Games/EnglishPuzzle/Constants';
import '../index.scss';

const CheckBtn: React.FC<CheckBtnProps> = ({
  setCheckedStateToCards, wordsToApply, wordsToCheck, setDragging, phrase, learningWord,
}) => {
  const checkBtnState = useSelector((state: State) => state.engPuzzleControlBtns.checkBtn);
  const checkedCssState = new Array(wordsToApply.length);
  const phraseToSpeak = [];
  phrase.forEach((card) => phraseToSpeak.push(card.word));
  const dispatch = useDispatch();
  const checkBtnStyle = checkBtnState ? 'help-button' : 'help-button disabled';
  const clickHandler = () => {
    if (wordsToApply.every((_, i) => wordsToApply[i].word === wordsToCheck[i].word)) {
      setDragging(true);
      dispatch(enableContinueBtn());
      dispatch(audioEnabled());
      dispatch(translateEnable());
      dispatch(backgroundEnable());
      dispatch(enableContinueBtn());
      dispatch(addSuccess({ sentence: phraseToSpeak.join(' '), learning: learningWord }));
      pronounceAudio(true, phraseToSpeak.join(' '), dispatch, speakerEnable, speakerDisable);
      setCheckedStateToCards(checkedCssState.fill('start-word true', 0, checkedCssState.length));
    } else {
      for (let i = 0; i < wordsToApply.length; i++) {
        if (wordsToApply[i].word !== wordsToCheck[i].word) {
          checkedCssState[i] = 'start-word false';
        } else {
          checkedCssState[i] = 'start-word true';
        }
      }
      setCheckedStateToCards(checkedCssState);
      dispatch(enableDontKnowBtn());
    }
  };
  return (
    <button
      type="button"
      className={checkBtnStyle}
      onClick={clickHandler}
    >
      Check
    </button>
  );
};

export default CheckBtn;
