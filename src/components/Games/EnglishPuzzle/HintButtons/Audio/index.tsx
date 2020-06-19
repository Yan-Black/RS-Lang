/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Audio: React.FunctionComponent = () => {
  const currentBtnsState = useSelector((state: any) => state.engPuzzleBtns);
  const audioBtnStyle = currentBtnsState.audioHintActive ? 'pronounce-word' : 'pronounce-word off';
  return (
    <div className={audioBtnStyle}><FontAwesomeIcon icon={faMusic} /></div>
  );
};

export default Audio;
