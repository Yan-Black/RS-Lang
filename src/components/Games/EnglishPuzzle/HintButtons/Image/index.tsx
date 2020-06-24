/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models';
import { backgroundEnable, backgroundDisable } from 'containers/Games/EnglishPuzzle/HintButtons/actions';

const Image: React.FC = () => {
  const dispatch = useDispatch();
  const backBtnState = useSelector((state: State) => state.engPuzzleBtns.backgroundHintActive);
  const stateSwitcher = () => (
    backBtnState
      ? dispatch(backgroundDisable())
      : dispatch(backgroundEnable())
  );
  const clickHandler = () => stateSwitcher();
  const backgroundBtnStyle = backBtnState ? 'show-background' : 'show-background off';
  return (
    <div className={backgroundBtnStyle} onClick={clickHandler}>
      <FontAwesomeIcon icon={faImage} />
    </div>
  );
};
export default Image;
