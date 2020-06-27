import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import {useDispatch} from "react-redux";
import {backgroundWord, translateWord} from "../../../../containers/Games/SpeakIt/FetchGroup/actions";

function Card({ data }) {
  const dispatch = useDispatch();
  const cardData = () => {
    dispatch(translateWord(data.wordTranslate));
    dispatch(backgroundWord(data.image));
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
