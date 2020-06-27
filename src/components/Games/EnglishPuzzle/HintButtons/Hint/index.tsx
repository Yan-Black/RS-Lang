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
  const backBtnState = useSelector((state: State) => state.engPuzzleBtns.backgroundHintActive);
  const speakerBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const translateBtnState = useSelector((state: State) => state.engPuzzleBtns.translateHintActive);
  const initialBtnsState = { ...JSON.parse(localStorage.getItem('hintsState')) };
  const stateSwitcher = () => {
    if (translateBtnState) {
      dispatch(translateDisable());
      initialBtnsState.translateHintActive = false;
      initialBtnsState.backgroundHintActive = backBtnState;
      initialBtnsState.audioHintActive = speakerBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    } else {
      dispatch(translateEnable());
      initialBtnsState.translateHintActive = true;
      initialBtnsState.backgroundHintActive = backBtnState;
      initialBtnsState.audioHintActive = speakerBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    }
  };
  const clickHandler = () => stateSwitcher();
  const translateBtnStyle = translateBtnState ? 'show-hint' : 'show-hint off';
  return (
    <div className={translateBtnStyle} onClick={clickHandler}>
      <span className="tooltiptext">translate hint</span>
      <FontAwesomeIcon icon={faFileAlt} />
    </div>
  );
};

export default Hint;
