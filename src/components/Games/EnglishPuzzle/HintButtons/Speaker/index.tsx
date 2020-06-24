/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models/state';
import { audioEnabled, audioDisabled } from 'containers/Games/EnglishPuzzle/HintButtons/actions';
import '../index.scss';

const Speaker: React.FC = () => {
  const dispatch = useDispatch();
  const speakerBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const stateSwitcher = () => (
    speakerBtnState ? dispatch(audioDisabled()) : dispatch(audioEnabled())
  );
  const clickHandler = () => stateSwitcher();
  const speakerBtnStyle = speakerBtnState ? 'auto-pronunciation' : 'auto-pronunciation off';

  return (
    <div className={speakerBtnStyle} onClick={clickHandler}>
      <FontAwesomeIcon icon={faVolumeUp} />
    </div>
  );
};
export default Speaker;
