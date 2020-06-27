import * as React from 'react';
import './index.scss';
import Card from '../Card';
import { useSelector } from 'react-redux';
import {State} from "../../../../models/state";

function Cards() {
  const dataWords = useSelector((state: State) => state.speakItfetch.dataWords);

  return (
    <div className="cards-wrapper">
      { dataWords.map((item) => (
        <Card
          data={item}
          key={item.word}
        />
      ))}
    </div>
  );
}

export default Cards;
