/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { translateEnable, translateDisable } from '../../../../../containers/Games/EnglishPuzzle/HintButtons/actions';

const Hint: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const currentBtnsState = useSelector((state: any) => state.engPuzzleBtns);
  const stateSwitcher = () => (
    currentBtnsState.translateHintActive ? translateDisable() : translateEnable()
  );
  const translateBtnStyle = currentBtnsState.translateHintActive ? 'show-hint' : 'show-hint off';
  return (
    <div className={translateBtnStyle} onClick={() => dispatch(stateSwitcher())}>
      <FontAwesomeIcon icon={faFileAlt} />
    </div>
  );
};

export default Hint;
