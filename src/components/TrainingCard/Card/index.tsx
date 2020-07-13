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
import TrainingCardFields from 'components/TrainingCard/Card/TrainingCardFields';
import CheckedAnswer from 'components/TrainingCard/Card/CheckedAnswer';
import {
  setInputWord, toggleAnswerCorrect, toggleMoveToNext,
  addToSuccessTraining, addToFailedTraining, progressTraining,
  addRowOfSuccess, toggleTrainingStatistic,
} from 'containers/TrainingCard/actions';
import { ru } from 'constants/training-constants';

const Card: React.FC = () => {
  // to do use lang, current progress and daily cards limit from store
  const usedLang = ru;
  const dispatch = useDispatch();
  const index = useSelector((state: State) => state.training.currIndex);
  const data: FetchedWordData = book1[0][index];
  const prevData: FetchedWordData = book1[0][index - 1];
  const cardsToTrain = 10;
  const inputWidth = data.word.length * 12;
  const isStatisticOpen = useSelector((
    state: State,
  ) => state.trainingStatistic.isTrainingStatisticOpen);
  const [inputData, setInputData] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [successRow, setSuccessRow] = useState(0);
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

  useEffect(() => {
    if (!isAnswerChecked) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
      if (isAnswerCorrect && playAudioSetting) {
        const handleAudio = async () => {
          try {
            wordAudio.onclick = () => wordAudio.pause();
            meaningAudio.onclick = () => meaningAudio.pause();
            exampleAudio.onclick = () => exampleAudio.pause();

            await wordAudio.play();
            wordAudio.onended = async () => {
              if (showWordMeaning && showWordExample) {
                await meaningAudio.play();
                meaningAudio.onended = async () => {
                  await exampleAudio.play();
                  exampleAudio.onended = () => {
                  };
                };
              }
            };
          } catch (error) {
            throw new Error('Cannot load the audio files');
          }
        };
        // eslint-disable-next-line no-void
        void handleAudio();
      }
    }
  });

  const getUrl = () => {
    if (showWordImage && (isAnswerCorrect || index < cardsToTrain)) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.image}`;
    if (!showWordImage && (isAnswerChecked || index >= cardsToTrain)) return checkMarkImage;
    if (showWordImage && (isAnswerCorrect || index >= cardsToTrain)) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${prevData.image}`;
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

  const checkAnswerBTNHandler = () => {
    if (!canMoveToNext && !isAnswerChecked && inputData.length > 0) {
      dispatch(setInputWord(inputData));
      setInputData('');
      if (inputData.toLowerCase() === data.word.toLowerCase()) {
        if (isSuccess) setSuccessRow(successRow + 1);
        dispatch(toggleAnswerCorrect());
        dispatch(toggleMoveToNext());
      } else {
        setSuccessRow(0);
        setIsSuccess(false);
      }
    }
  };

  const helpBTNHandler = () => {
    if (!isAnswerCorrect) {
      setIsSuccess(false);
      setSuccessRow(0);
      dispatch(setInputWord(data.word));
      dispatch(toggleAnswerCorrect());
      setInputData('');
      dispatch(toggleMoveToNext());
    }
  };

  const nextCardBTNHandler = () => {
    const event = new Event('click');
    if (isSuccess) {
      dispatch(addToSuccessTraining(data));
    } else {
      dispatch(addToFailedTraining(data));
    }
    wordAudio.dispatchEvent(event);
    meaningAudio.dispatchEvent(event);
    exampleAudio.dispatchEvent(event);
    setIsSuccess(true);
    dispatch(progressTraining());
    dispatch(addRowOfSuccess(successRow));
    if (index === cardsToTrain - 1 && !isStatisticOpen) {
      dispatch(toggleTrainingStatistic(true));
    }
  };

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => { event.preventDefault(); checkAnswerBTNHandler(); };

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
            {usedLang.buttons.showAnswerBTN}
          </button>
          <button
            className="btn btn-info shadow my-1"
            type="button"
            onClick={checkAnswerBTNHandler}
          >
            {usedLang.buttons.checkBTN}
          </button>

          <button
            type="button"
            className={deleteBTNClass}
          >
            {usedLang.buttons.deleteBTN}
          </button>
          <button
            type="button"
            className={difficultBTNClass}
          >
            {usedLang.buttons.difficultBTN}
          </button>
        </div>
        <div className="btn-block-two">
          <button
            className={nextCardBTNClass}
            type="button"
            onClick={nextCardBTNHandler}
          >
            {index < cardsToTrain - 1 ? usedLang.buttons.nextCardBTN : usedLang.buttons.finishBTN}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
