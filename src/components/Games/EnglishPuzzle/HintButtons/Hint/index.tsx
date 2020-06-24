/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { translateEnable, translateDisable } from 'containers/Games/EnglishPuzzle/HintButtons/actions';
import { State } from 'models';

const Hint: React.FC = () => {
  const dispatch = useDispatch();
  const translateBtnState = useSelector((state: State) => state.engPuzzleBtns.translateHintActive);
  const stateSwitcher = () => (
    translateBtnState ? dispatch(translateDisable()) : dispatch(translateEnable())
  );
  const clickHandler = () => stateSwitcher();
  const translateBtnStyle = translateBtnState ? 'show-hint' : 'show-hint off';
  return (
    <div className={translateBtnStyle} onClick={clickHandler}>
      <FontAwesomeIcon icon={faFileAlt} />
    </div>
  );
};

export default Hint;
