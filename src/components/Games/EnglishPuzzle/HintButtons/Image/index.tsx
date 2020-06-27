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
  const speakerBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const translateBtnState = useSelector((state: State) => state.engPuzzleBtns.translateHintActive);
  const initialBtnsState = { ...JSON.parse(localStorage.getItem('hintsState')) };
  const stateSwitcher = () => {
    if (backBtnState) {
      dispatch(backgroundDisable());
      initialBtnsState.backgroundHintActive = false;
      initialBtnsState.audioHintActive = speakerBtnState;
      initialBtnsState.translateHintActive = translateBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    } else {
      dispatch(backgroundEnable());
      initialBtnsState.backgroundHintActive = true;
      initialBtnsState.audioHintActive = speakerBtnState;
      initialBtnsState.translateHintActive = translateBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    }
  };
  const clickHandler = () => stateSwitcher();
  const backgroundBtnStyle = backBtnState ? 'show-background' : 'show-background off';
  return (
    <div className={backgroundBtnStyle} onClick={clickHandler}>
      <span className="tooltiptext">image hint</span>
      <FontAwesomeIcon icon={faImage} />
    </div>
  );
};
export default Image;
