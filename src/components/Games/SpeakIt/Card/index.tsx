import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function Card() {
  return (
    <div className="card">
      <FontAwesomeIcon icon={faVolumeUp} className="voice-img" />
      {/* <i class="far fa-play-circle"></i> */}
      <p className="word">personality</p>
      <p className="transcription">[pə̀ːrsənǽləti]</p>
    </div>
  );
}

export default Card;
