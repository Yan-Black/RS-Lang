import * as React from 'react';
import questionMarkImage from 'assets/question.svg';
import checkMarkImage from 'assets/checkbox.svg';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';

import './index.scss';
import {
  useState, useEffect, useRef,
} from 'react';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import book1 from 'constants/words-constants/book1';
import { setInputWord, toggleAnswerCorrect, toggleMoveToNext, progressTraining } from 'containers/Main/Training/actions';
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

  const imgURL = !isAnswerChecked ? questionMarkImage : (showWordImage ? `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.image}` : checkMarkImage);
  // const imageClass = showWordImage ? 'training-card-image' : 'invisible';

  const showAllTranslates = useSelector((state: State) => state.trainingSettings.showAllTranslates);
  const translatesClass = showAllTranslates ? 'translate' : 'invisible';

  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);
  const nextCardBTNClass = canMoveToNext ? 'next-card-btn btn btn-success shadow my-2' : 'btn invisible my-2';

  const showHelpBTN = useSelector((state: State) => state.trainingSettings.showHelpBTN);
  const helpBTNClass = showHelpBTN ? 'btn btn-info shadow my-1' : 'd-none';

  const showDeleteBTN = useSelector((state: State) => state.trainingSettings.showDeleteBTN);
  const deleteBTNClass = showDeleteBTN ? 'btn btn-info shadow my-1' : 'd-none';

  const showDifficultBTN = useSelector((state: State) => state.trainingSettings.showDifficultBTN);
  const difficultBTNClass = showDifficultBTN ? 'btn btn-info shadow my-1' : 'd-none';

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const checkAnswerBTNHandler = () => {
    if (!canMoveToNext && !isAnswerChecked) {
      dispatch(setInputWord(inputData));
      if (inputData === data.word) {
        dispatch(toggleAnswerCorrect());
        dispatch(toggleMoveToNext());
      }
      setInputData('');
    }
  };

  const helpBTNHandler = () => {
    if (!canMoveToNext && !isAnswerChecked) {
      dispatch(setInputWord(data.word));
      dispatch(toggleAnswerCorrect());
      dispatch(toggleMoveToNext());
      setInputData('');
    }
  };

  const nextCardBTNHandler = () => {
    dispatch(progressTraining());
  };

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => { event.preventDefault(); checkAnswerBTNHandler(); };

  return (
    <div className="training-card-wrapper shadow">
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
      <div className="training-card-footer px-1">
        <div className="btn-block-one">
          <button
            type="button"
            className={helpBTNClass}
            onClick={helpBTNHandler}
          >
            Показать ответ
          </button>
          <button
            className="btn btn-info shadow my-1"
            type="button"
            onClick={checkAnswerBTNHandler}
          >
            Проверить
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
        <div className="btn-block-two">
          <button
            className={nextCardBTNClass}
            type="button"
            onClick={nextCardBTNHandler}
          >
            Следующая карточка
          </button>
        </div>
      </div>

    </div>
  );
};
export default Card;
