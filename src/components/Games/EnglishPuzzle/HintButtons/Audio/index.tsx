/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { pronounceAudio } from '../../Constants';

const Audio: React.FC = () => {
  const audioBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  const audioBtnStyle = audioBtnState ? 'pronounce-word' : 'pronounce-word off';
  const clickHandler = () => {
    pronounceAudio(audioBtnState, actualWordsCollection, activeIdx);
  };
  return (
    <div className={audioBtnStyle} onClick={clickHandler}>
      <FontAwesomeIcon icon={faMusic} />
    </div>
  );
};

export default Audio;
