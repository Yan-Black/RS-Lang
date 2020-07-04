import * as React from 'react';
import { useSpeechRecognition } from "react-speech-kit";
import './index.scss';
import Card from '../Card';
import {useDispatch, useSelector} from 'react-redux';
import {State} from "../../../../models/state";
import {useState} from "react";
import {nextCard} from "../../../../containers/Games/SpeakIt/ControlButtons/actions";
import {win} from "../../../../containers/Games/SpeakIt/FetchGroup/actions";

function Cards() {

  const dispatch = useDispatch();
  const statistics = useSelector((state: State) => state.speakItFetch.statistics);
  const game = useSelector((state: State) => state.speakItButtons.startGame);
  const arr = [1,3,4,5,2,6,0,7,9,8];
  const gameWord = useSelector((state: State) => state.speakItButtons.gameWord);
  const [value, setValue] = useState('');
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result.toLowerCase());
    }
  });
  const cards = statistics.map((item, index) => (
    <Card
      next={arr[index]}
      index={index}
      data={item}
      key={item.word}
    />
  ))

  if(game) {
    listen({lang: "en-AU"});
      if (value === gameWord) {
        dispatch(nextCard());
        dispatch(win(gameWord));
      }
  } else {
    stop();
  }

  return (
    <div className="cards-wrapper">
      { cards }
    </div>
  );
}

export default Cards;
