import * as React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const ResultItem = ({className, word, transcription, wordTranslate }) => {
  return (
    <div className={className}>
      <span className='audio-item'>
        <FontAwesomeIcon icon={faVolumeUp} className="voice-img" />
      </span>
      {word} {transcription} {wordTranslate}
    </div>
  );
}

export default ResultItem;
