/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const HintsBlock: React.FunctionComponent = () => {
  const currentState = useSelector((state: any) => state.engPuzzleBtns);
  const speakerState = currentState.audioHintActive ? 'english-puzzle-speaker' : 'english-puzzle-speaker-disabled';
  const translateFieldState = currentState.translateHintActive ? 'english-puzzle-translation' : 'english-puzzle-translation-disabled';
  return (
    <div className="english-puzzle-hints-block">
      <FontAwesomeIcon icon={faVolumeUp} className={speakerState} />
      <p className={translateFieldState}>Translate</p>
    </div>
  );
};

export default HintsBlock;
