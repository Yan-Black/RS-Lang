/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { State } from 'models';

const Audio: React.FC = () => {
  const audioBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const audioBtnStyle = audioBtnState ? 'pronounce-word' : 'pronounce-word off';
  return (
    <div className={audioBtnStyle}><FontAwesomeIcon icon={faMusic} /></div>
  );
};

export default Audio;
