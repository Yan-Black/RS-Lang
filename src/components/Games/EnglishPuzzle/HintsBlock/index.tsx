import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models/state';
import './index.scss';
import { translateExtractor } from '../Constants';

const HintsBlock: React.FC = () => {
  const currentState = useSelector((state: State) => state.engPuzzleBtns);
  const isSpeakerOn = useSelector((state: State) => state.engPuzzleBtns.speakerActive);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  const speakerState = currentState.audioHintActive;
  const speakerStyle = () => {
    let style: string;
    if (isSpeakerOn) {
      style = 'english-puzzle-speaker-active';
    } else if (speakerState) {
      style = 'english-puzzle-speaker';
    } else {
      style = 'english-puzzle-speaker-disabled';
    }
    return style;
  };
  const muteSpeaker = () => (
    !speakerState
      ? 'english-puzzle-speaker'
      : 'english-puzzle-speaker-disabled'
  );
  const translateFieldState = currentState.translateHintActive
    ? 'english-puzzle-translation'
    : 'english-puzzle-translation-disabled';

  return (
    <div className="english-puzzle-hints-block">
      <FontAwesomeIcon icon={faVolumeUp} className={speakerStyle()} />
      <FontAwesomeIcon
        icon={faVolumeMute}
        className={muteSpeaker()}
      />
      {actualWordsCollection.length ? (
        <p className={translateFieldState}>
          {translateExtractor(actualWordsCollection, activeIdx)}
        </p>
      ) : (<p />)}
    </div>
  );
};

export default HintsBlock;
