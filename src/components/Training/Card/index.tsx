import * as React from 'react';
import questionMarkImage from 'assets/question.svg';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';

import './index.scss';
import {
  useState, useEffect, useRef,
} from 'react';
import { toggleAnswerCorrect, setInputWord } from 'containers/Main/Training/actions';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import book1 from 'constants/words-constants/book1';
import CheckedAnswer from 'components/Main/Training/Card/CheckedAnswer';

const Card: React.FC = () => {
  const index = useSelector((state: State) => state.training.currIndex);
  const data: FetchedWordData = book1[0][index];
  const inputWidth = data.word.length * 12;
  const [inputData, setInputData] = useState('');
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();

  const isAnswerChecked = useSelector((state: State) => state.training.isChecked);

  useEffect(() => {
    if (!isAnswerChecked) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  });

  const showWordTranslate = useSelector((state: State) => state.trainingSettings.showWordTranslate);
  const translateClass = showWordTranslate ? 'training-card-translate' : 'invisible';

  const showWordExample = useSelector((state: State) => state.trainingSettings.showWordExample);
  const exampleClass = showWordExample ? 'training-card-example' : 'invisible';

  const showWordMeaning = useSelector((state: State) => state.trainingSettings.showWordMeaning);
  const meaningClass = showWordMeaning ? 'training-card-meaning' : 'invisible';

  const showWordTranscription = useSelector(
    (state: State) => state.trainingSettings.showWordTranscription,
  );
  const transcriptionClass = showWordTranscription ? 'training-card-transcript' : 'invisible';

  const showWordImage = useSelector((state: State) => state.trainingSettings.showWordImage);
  const imgURL = showWordImage ? `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.image}` : questionMarkImage;
  // const imageClass = showWordImage ? 'training-card-image' : 'invisible';

  const showAllTranslates = useSelector((state: State) => state.trainingSettings.showAllTranslates);
  const translatesClass = showAllTranslates ? 'translate' : 'invisible';

  const showHelpBTN = useSelector((state: State) => state.trainingSettings.showHelpBTN);
  const helpBTNClass = showHelpBTN ? null : 'd-none';

  const showDeleteBTN = useSelector((state: State) => state.trainingSettings.showDeleteBTN);
  const deleteBTNClass = showDeleteBTN ? null : 'd-none';

  const showDifficultBTN = useSelector((state: State) => state.trainingSettings.showDifficultBTN);
  const difficultBTNClass = showDifficultBTN ? null : 'd-none';

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const checkAnswerBTNHandler = () => {
    dispatch(setInputWord(inputData));
    if (inputData === data.word) {
      dispatch(toggleAnswerCorrect());
    }
    setInputData('');
  };

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => { event.preventDefault(); checkAnswerBTNHandler(); };

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
          <form action="" className="checking-form" id="checking-form" onSubmit={formSubmitHandler}>
            <input
              className="mx-auto"
              type="text"
              ref={inputRef}
              value={inputData}
              maxLength={data.word.length}
              style={{ width: `${inputWidth}px` }}
              onChange={inputChangeHandler}
            />
            <CheckedAnswer />
          </form>
        </div>
        <div className="training-card-image-container p-2">
          <img className="training-card-image rounded" alt="hint" src={imgURL} />
        </div>
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
          onClick={checkAnswerBTNHandler}
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
