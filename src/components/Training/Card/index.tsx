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
import TrainingCardFields from 'components/TrainingCard/Card/TrainingCardFields';
import CheckedAnswer from 'components/TrainingCard/Card/CheckedAnswer';

const Card: React.FC = () => {
  const dispatch = useDispatch();
  const index = useSelector((state: State) => state.training.currIndex);
  const data: FetchedWordData = book1[0][index];
  const inputWidth = data.word.length * 12;
  const [inputData, setInputData] = useState('');
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const isAnswerChecked = useSelector((state: State) => state.training.isChecked);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  const showWordExample = useSelector((state: State) => state.trainingSettings.showWordExample);
  const showWordMeaning = useSelector((state: State) => state.trainingSettings.showWordMeaning);
  const showWordImage = useSelector((state: State) => state.trainingSettings.showWordImage);
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);
  const showHelpBTN = useSelector((state: State) => state.trainingSettings.showHelpBTN);
  const showDeleteBTN = useSelector((state: State) => state.trainingSettings.showDeleteBTN);
  const showDifficultBTN = useSelector((state: State) => state.trainingSettings.showDifficultBTN);
  const playAudioSetting = useSelector((state: State) => state.trainingSettings.playAudio);
  const wordAudioURL = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.audio}`;
  const meaningAudioURL = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.audioMeaning}`;
  const exampleAudioURL = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.audioExample}`;

  const wordAudio = new Audio(wordAudioURL);
  const meaningAudio = new Audio(meaningAudioURL);
  const exampleAudio = new Audio(exampleAudioURL);

  const playAllAudio = async () => {
    await wordAudio.play();
    wordAudio.onended = async () => {
      if (showWordMeaning && showWordExample) {
        await meaningAudio.play();
        meaningAudio.onended = async () => {
          await exampleAudio.play();
          exampleAudio.onended = () => dispatch(toggleMoveToNext());
        };
      }
      if (showWordMeaning && !showWordExample) {
        await meaningAudio.play();
        meaningAudio.onended = () => dispatch(toggleMoveToNext());
      }
      if (!showWordMeaning && showWordExample) {
        await exampleAudio.play();
        exampleAudio.onended = () => dispatch(toggleMoveToNext());
      }
    };
  };

  useEffect(() => {
    if (!isAnswerChecked) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  });

  const getUrl = () => {
    if (showWordImage && isAnswerCorrect) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.image}`;
    if (!showWordImage && isAnswerChecked) return checkMarkImage;
    return questionMarkImage;
  };

  const imgURL = getUrl();
  const nextCardBTNClass = canMoveToNext ? 'next-card-btn btn btn-success shadow my-2' : 'btn invisible my-2';
  const helpBTNClass = showHelpBTN ? 'btn btn-info shadow my-1' : 'd-none';
  const deleteBTNClass = showDeleteBTN ? 'btn btn-info shadow my-1' : 'd-none';
  const difficultBTNClass = showDifficultBTN ? 'btn btn-info shadow my-1' : 'd-none';

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!canMoveToNext) {
      setInputData(event.target.value);
    }
  };

  const checkAnswerBTNHandler = async () => {
    if (!canMoveToNext && !isAnswerChecked && inputData.length > 0) {
      dispatch(setInputWord(inputData));
      setInputData('');
      if (inputData === data.word) {
        dispatch(toggleAnswerCorrect());
        if (playAudioSetting) {
          await playAllAudio();
        } else {
          dispatch(toggleMoveToNext());
        }
      }
    }
  };

  const helpBTNHandler = async () => {
    if (!isAnswerCorrect) {
      dispatch(setInputWord(data.word));
      dispatch(toggleAnswerCorrect());
      setInputData('');
      if (playAudioSetting) {
        await playAllAudio();
      } else {
        dispatch(toggleMoveToNext());
      }
    }
  };

  const nextCardBTNHandler = () => {
    dispatch(progressTraining());
  };

  const formSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => { event.preventDefault(); await checkAnswerBTNHandler(); };

  return (
    <div className="training-card-wrapper shadow">
      <div className="training-card-content">
        <div className="training-card-info">
          <TrainingCardFields />
          <form action="" className="checking-form m-auto" id="checking-form" style={{ width: `${inputWidth}px` }} onSubmit={formSubmitHandler}>
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
