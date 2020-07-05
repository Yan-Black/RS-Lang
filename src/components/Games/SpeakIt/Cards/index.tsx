import * as React from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../Card';
import { State } from '../../../../models/state';
import { nextCard } from '../../../../containers/Games/SpeakIt/ControlButtons/actions';
import { win } from '../../../../containers/Games/SpeakIt/FetchGroup/actions';

const Cards = (): JSX.Element => {
  const dispatch = useDispatch();
  const statistics = useSelector((state: State) => state.speakItFetch.statistics);
  const game = useSelector((state: State) => state.speakItButtons.startGame);
  const arr = [1, 3, 4, 5, 2, 6, 0, 7, 9, 8];
  const gameWord = useSelector((state: State) => state.speakItButtons.gameWord);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.toLowerCase() === gameWord) {
      dispatch(nextCard());
      dispatch(win(gameWord));
    }
  }, [gameWord, value]);

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  if (game) {
    listen({ lang: 'en-US' });
  } else {
    stop();
  }

  return (
    <div className="cards-wrapper">
      { statistics.map((item, index) => (
        <Card
          next={arr[index]}
          index={index}
          data={item}
          key={item.word}
        />
      ))}
    </div>
  );
};

export default Cards;
