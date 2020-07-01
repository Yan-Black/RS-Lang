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
  const backBtnState = useSelector((state: State) => state.engPuzzleBtns.backgroundHintActive);
  const translateBtnState = useSelector((state: State) => state.engPuzzleBtns.translateHintActive);
  const initialBtnsState = { ...JSON.parse(localStorage.getItem('hintsState')) };
  const stateSwitcher = () => {
    if (speakerBtnState) {
      dispatch(audioDisabled());
      initialBtnsState.audioHintActive = false;
      initialBtnsState.backgroundHintActive = backBtnState;
      initialBtnsState.translateHintActive = translateBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    } else {
      dispatch(audioEnabled());
      initialBtnsState.audioHintActive = true;
      initialBtnsState.backgroundHintActive = backBtnState;
      initialBtnsState.translateHintActive = translateBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    }
  };
  const clickHandler = () => stateSwitcher();
  const speakerBtnStyle = speakerBtnState ? 'hint-button' : 'hint-button off';

  return (
    <button
      type="button"
      className={speakerBtnStyle}
      onClick={clickHandler}
    >
      <span className="tooltiptext">audio state switch</span>
      <FontAwesomeIcon icon={faVolumeUp} />
    </button>
  );
};
export default Speaker;
