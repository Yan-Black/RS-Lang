/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { audioEnabled, audioDisabled } from '../../../../../containers/Games/EnglishPuzzle/HintButtons/actions';
import '../index.scss';

const Speaker: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const currentBtnsState = useSelector((state: any) => state.engPuzzleBtns);
  const stateSwitcher = () => (
    currentBtnsState.audioHintActive ? audioDisabled() : audioEnabled()
  );
  const speakerBtnStyle = currentBtnsState.audioHintActive ? 'auto-pronunciation' : 'auto-pronunciation off';

  return (
    <div className={speakerBtnStyle} onClick={() => dispatch(stateSwitcher())}>
      <FontAwesomeIcon icon={faVolumeUp} />
    </div>
  );
};
export default Speaker;
