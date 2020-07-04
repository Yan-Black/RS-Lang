import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {backgroundWord, translateWord} from "../../../../containers/Games/SpeakIt/FetchGroup/actions";
import {State} from "../../../../models/state";
import {activeWord} from "../../../../containers/Games/SpeakIt/CardsGroup/actions";
import {selectedWord} from "../../../../containers/Games/SpeakIt/ControlButtons/actions";

function Card({ data, index, next }) {

  const dispatch = useDispatch();
  const pagination = useSelector((state: State) => state.speakItButtons.pagination);
  if(pagination === Number(next)) {
    dispatch(selectedWord(data.word));
  }
  const active = useSelector((state: State) => state.speakItWord.activeWord);
  const game = useSelector((state: State) => state.speakItButtons.startGame);
  const statistics = useSelector((state: State) => state.speakItFetch.statistics);
  const winCard = statistics.find(elem => elem.word === data.word).win;
  const mistakeCard = statistics.find(elem => elem.word === data.word).mistake;


  const cardData = () => {
    dispatch(activeWord(index));
    dispatch(translateWord(data.wordTranslate));
    dispatch(backgroundWord(data.image));
    const urlAudio = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${data.audio}`;
    const audio = new Audio(urlAudio);
    !game && audio.play();
  };


  return (
    <div className={
        game ?
          classNames('card', {'card-selected' : pagination === Number(next), 'card-win': winCard , 'card-mistake': mistakeCard })
          :
          classNames("card", {'active-card': index === active })
        }
         id={next}
         onClick={game ? null : cardData }>
      <FontAwesomeIcon icon={faVolumeUp} className="voice-img" />
      <p className="word">{data.word}</p>
      <p className="transcription">{data.transcription}</p>
    </div>
  );
}

export default Card;
