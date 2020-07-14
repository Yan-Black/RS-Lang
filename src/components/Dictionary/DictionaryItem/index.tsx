/* eslint-disable react/no-danger */
import * as React from 'react';
import './index.scss';
import { WordObj } from 'containers/Dictionary/models';
import colorSpeaker from 'assets/colored_speaker.svg';
import { ru, eng } from 'constants/dictionary-constants';
import { State } from 'models';
import { useSelector } from 'react-redux';

function DictionaryItem({ item }: {item: WordObj}): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${item.audio}`;
  const audio = new Audio(url);

  const transcriptionClass = settingsState.showTranscription ? 'text-danger' : 'd-none';
  const imageBlockClass = settingsState.showImage ? 'image-block shadow m-1' : 'd-none';
  const exampleClass = settingsState.example ? null : 'd-none';
  const meaningClass = settingsState.wordMeaning ? null : 'd-none';

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
        <span className={transcriptionClass}>{item.transcription}</span>
      </div>
      <div
        className={imageBlockClass}
      >
        <img
          className="word-image rounded"
          src={`https://raw.githubusercontent.com/lactivka/rslang-data/master/${item.image}`}
          alt="Illustration to word"
        />
      </div>
      <div className="example-meaning-block d-flex flex-column m-1">
        <p className={exampleClass} dangerouslySetInnerHTML={{ __html: `${item.textExample}` }} />
        <p className={meaningClass} dangerouslySetInnerHTML={{ __html: `${item.textMeaning}` }} />
      </div>
      <div className="word-statistic d-flex flex-wrap justify-content-between mb-2 px-1">
        <span className="px-1">
          {usedLang.wordProgress}
          {' '}
          1 2 3 4 5
        </span>
        <span className="px-1">
          {usedLang.repeats}
          {' '}
          125
        </span>
        <span className="px-1">
          {usedLang.lastRepeat}
          {' '}
          2d
          {' '}
          {usedLang.before}
        </span>
        <span className="px-1">
          {usedLang.nextRepeat}
          {' '}
          {usedLang.in}
          {' '}
          1m
        </span>
      </div>
    </div>
  );
}

export default DictionaryItem;
