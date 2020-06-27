/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { speakerEnable, speakerDisable } from 'containers/Games/EnglishPuzzle/HintButtons/actions';

interface Props {
  phrase: string;
}

const Audio: React.FC<Props> = ({ phrase }) => {
  const audioBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const dispatch = useDispatch();
  const audioBtnStyle = audioBtnState ? 'pronounce-word' : 'pronounce-word off';
  const regex = /<[^>]*>/g;
  const sentence = new SpeechSynthesisUtterance();
  const { speechSynthesis } = window;
  sentence.lang = 'en-EN';
  sentence.text = phrase.replace(regex, '');
  sentence.onstart = () => dispatch(speakerEnable());
  sentence.onend = () => dispatch(speakerDisable());
  if (!audioBtnState) speechSynthesis.cancel();

  const clickHandler = () => {
    if (audioBtnState) {
      speechSynthesis.speak(sentence);
    }
  };

  useEffect(() => {
    speechSynthesis.cancel();
    if (audioBtnState) {
      speechSynthesis.speak(sentence);
    }
  }, [phrase]);

  return (
    <div className={audioBtnStyle} onClick={clickHandler}>
      <span className="tooltiptext">play audio</span>
      <FontAwesomeIcon icon={faMusic} />
    </div>
  );
};

export default Audio;
