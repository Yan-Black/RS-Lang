/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable max-len */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';

import './index.scss';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import book1 from 'constants/words-constants/book1';

const Card: React.FC = () => {
  const data: FetchedWordData = book1[0][0];
  const inputWidth = data.word.length * 10;
  // console.log(data.word.length);

  // const dispatch = useDispatch();

  const showWordTranslate = useSelector((state: State) => state.trainingSettings.showWordTranslate);
  const translateClass = showWordTranslate ? 'training-card-translate' : 'invisible';

  const showWordExample = useSelector((state: State) => state.trainingSettings.showWordExample);
  const exampleClass = showWordExample ? 'training-card-example' : 'invisible';

  const showWordMeaning = useSelector((state: State) => state.trainingSettings.showWordMeaning);
  const meaningClass = showWordMeaning ? 'training-card-meaning' : 'invisible';

  const showWordTranscription = useSelector((state: State) => state.trainingSettings.showWordTranscription);
  const transcriptionClass = showWordTranscription ? 'training-card-transcript' : 'invisible';

  const showWordImage = useSelector((state: State) => state.trainingSettings.showWordImage);
  const imageClass = showWordImage ? 'training-card-image' : 'invisible';

  const showAllTranslates = useSelector((state: State) => state.trainingSettings.showAllTranslates);
  const translatesClass = showAllTranslates ? 'translate' : 'invisible';

  const showHelpBTN = useSelector((state: State) => state.trainingSettings.showHelpBTN);
  const helpBTNClass = showHelpBTN ? null : 'invisible';

  const showDeleteBTN = useSelector((state: State) => state.trainingSettings.showDeleteBTN);
  const deleteBTNClass = showDeleteBTN ? null : 'invisible';

  const showDifficultBTN = useSelector((state: State) => state.trainingSettings.showDifficultBTN);
  const difficultBTNClass = showDifficultBTN ? null : 'invisible';

  return (
    <div className="training-card-wrapper">
      <div className="training-card-content">
        <div className="training-card-info">
          <span className="training-card-word">
            {data.word}
          </span>
          <span className={translateClass}>
            {data.wordTranslate}
          </span>
          <span className={transcriptionClass}>
            {data.transcription}
          </span>
          <span className={meaningClass}>
            {data.textMeaning}
          </span>
          <span className={translatesClass}>
            {data.textMeaningTranslate}
          </span>
          <span className={exampleClass}>
            {data.textExample}
          </span>
          <span className={translatesClass}>
            {data.textExampleTranslate}
          </span>
          <input className="mx-auto" type="text" autoFocus style={{ width: `${inputWidth}px` }} />
        </div>
        <img className={imageClass} alt="hint" /* src={`${image}`} */ />
      </div>
      <div className="training-card-footer">
        <button
          type="button"
          className={helpBTNClass}
        >
          Показать ответ
        </button>
        <button
          type="button"
        >
          Проверить
        </button>
        <button
          type="button"
        >
          Следующая карточка
        </button>
        <button
          type="button"
          className={deleteBTNClass}
        >
          Удалить слово
        </button>
        <button
          type="button"
          className={difficultBTNClass}
        >
          Сложное слово
        </button>
      </div>
    </div>
  );
};
export default Card;
