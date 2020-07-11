/* eslint-disable react/no-danger */
import * as React from 'react';
import './index.scss';
import { WordObj } from 'containers/Dictionary/models';

function DictionaryItem({ item }: {item: WordObj}): JSX.Element {
  const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${item.audio}`;
  const audio = new Audio(url);

  async function playWordAudio(): Promise<void> {
    await audio.play();
  }

  const speakerIconClickHandler = () => playWordAudio();

  return (
    <div className="dictionary-item container shadow d-flex flex-wrap justify-content-between align-items-center my-1 py-1">
      <button
        className="btn btn-speaker btn-outline-primary shadow rounded-circle p-1 m-1"
        type="button"
        onClick={speakerIconClickHandler}
      >
        <div className="speaker-icon" />
      </button>
      <div className="word-translate-transcription-block d-flex flex-column justify-content-around align-items-center m-1">
        <span className="text-primary">{item.word}</span>
        <span className="text-center">{item.wordTranslate}</span>
        <span className="text-danger">{item.transcription}</span>
      </div>
      <div
        className="image-block shadow m-1"
      >
        <img
          className="word-image rounded"
          src={`https://raw.githubusercontent.com/lactivka/rslang-data/master/${item.image}`}
          alt="Illustration to word"
        />
      </div>
      <div className="example-meaning-block d-flex flex-column m-1">
        <p dangerouslySetInnerHTML={{ __html: `${item.textExample}` }} />
        <p dangerouslySetInnerHTML={{ __html: `${item.textMeaning}` }} />
      </div>
      <div className="word-statistic d-flex flex-wrap justify-content-between mb-2 px-1">
        <span className="px-1">Прогресс: 1 2 3 4 5</span>
        <span className="px-1">Повторений: 125</span>
        <span className="px-1">Последнее повторение: 2д назад</span>
        <span className="px-1">Следующее повторение: через 1мес</span>
      </div>
    </div>
  );
}

export default DictionaryItem;
