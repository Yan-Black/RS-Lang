/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableContinueBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { State } from 'models/state';
import '../index.scss';
import {
  audioEnabled, translateEnable, backgroundEnable, speakerEnable, speakerDisable,
} from 'containers/Games/EnglishPuzzle/HintButtons/actions';
import { DontKnowBtnProps } from '../../Models';
import { pronounceAudio } from '../../../Constants';

const DontKnowBtn: React.FC<DontKnowBtnProps> = ({
  onClickFn, length, setCheckedStateToCards, setDragging, phrase,
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
    pronounceAudio(true, phraseToSpeak.join(' '), dispatch, speakerEnable, speakerDisable);
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
