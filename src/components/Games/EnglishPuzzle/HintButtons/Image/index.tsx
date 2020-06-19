/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { backgroundEnable, backgroundDisable } from '../../../../../containers/Games/EnglishPuzzle/HintButtons/actions';

const Image: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const currentBtnsState = useSelector((state: any) => state.engPuzzleBtns);
  const stateSwitcher = () => (
    currentBtnsState.backgroundHintActive ? backgroundDisable() : backgroundEnable()
  );
  const backgroundBtnStyle = currentBtnsState.backgroundHintActive ? 'show-background' : 'show-background off';
  return (
    <div className={backgroundBtnStyle} onClick={() => dispatch(stateSwitcher())}>
      <FontAwesomeIcon icon={faImage} />
    </div>
  );
};
export default Image;
