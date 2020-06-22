import * as React from 'react';
import './index.scss';
import Card from '../Card';

function Cards({ dataWords, setBackground, setTranslate }) {
  const words = dataWords.slice(0, 10);
  // console.log(dataWords);
  return (
    <div className="cards-wrapper">
      { words.map((item) => (
        <Card
          data={item}
          key={item.word}
          setBackground={setBackground}
          setTranslate={setTranslate}
          // onClick={setBackground(item.word)}
        />
      ))}
    </div>
  );
}

export default Cards;
