import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function Card({ data, setBackground, setTranslate }) {

  const cardData = () => {
    const urlImg = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${data.image}`;
    setBackground(urlImg);
    setTranslate(data.wordTranslate);
    const urlAudio = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${data.audio}`;
    const audio = new Audio(urlAudio);
    audio.play();
  };

  return (
    <div className="card" onClick={cardData}>
      <FontAwesomeIcon icon={faVolumeUp} className="voice-img" />
      <p className="word">{data.word}</p>
      <p className="transcription">{data.transcription}</p>
    </div>
  );
}

export default Card;
