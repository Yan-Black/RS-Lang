import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { State } from '../../../../models/state';
import './index.scss';

const HintsBlock: React.FunctionComponent = () => {
  const currentState = useSelector((state: State) => state.engPuzzleBtns);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);

  const translateExtractor = (arr, idx) => arr[idx].textExampleTranslate;

  const speakerState = currentState.audioHintActive ? 'english-puzzle-speaker' : 'english-puzzle-speaker-disabled';
  const translateFieldState = currentState.translateHintActive ? 'english-puzzle-translation' : 'english-puzzle-translation-disabled';

  return (
    <div className="english-puzzle-hints-block">
      <FontAwesomeIcon icon={faVolumeUp} className={speakerState} />
      {actualWordsCollection.length ? (
        <p className={translateFieldState}>{translateExtractor(actualWordsCollection, activeIdx)}</p>
      ) : (null)}
    </div>
  );
};

export default HintsBlock;
