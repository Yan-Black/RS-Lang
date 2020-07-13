import * as React from 'react';
// import image from 'assets/files/01_0001.jpg';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import book1 from 'constants/words-constants';
import './index.scss';

const Card: React.FC = () => {
  const data: FetchedWordData = book1[0][0];
  return (
    <div className="training-card-wrapper">
      <div className="training-card-content">
        <div className="training-card-info">
          <span className="training-card-translate">
            {data.wordTranslate}
          </span>
          <span className="training-card-transcript">
            {data.transcription}
          </span>
          <span className="training-card-meaning">
            {data.textMeaning}
          </span>
          <span className="training-card-meaning-translate disabled">
            {data.textMeaningTranslate}
          </span>
          <span className="training-card-example">
            {data.textExample}
          </span>
          <span className="training-card-example-translate disabled">
            {data.textExampleTranslate}
          </span>
          <input type="text" />
        </div>
        <img className="training-card-image" alt="hint" />
      </div>
      <div className="training-card-footer">
        <button
          type="button"
        >
          Показать ответ
        </button>
        <button
          type="button"
        >
          Следующая карточка
        </button>
      </div>
    </div>
  );
};
export default Card;
