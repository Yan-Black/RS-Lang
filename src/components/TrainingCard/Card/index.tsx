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
import TrainingCardFields from 'components/TrainingCard/Card/TrainingCardFields';
import CheckedAnswer from 'components/TrainingCard/Card/CheckedAnswer';
import {
  setInputWord, toggleAnswerCorrect, toggleMoveToNext,
  addToSuccessTraining, addToFailedTraining, progressTraining,
  addRowOfSuccess, toggleTrainingStatistic, updateUserWords, updateNewCardProgress, updateGameCardProgress,
} from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';
import { createUserWord, updateUserWord } from 'constants/athorization-constants';

const Card: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  const dispatch = useDispatch();
  const index = useSelector((state: State) => state.training.currIndex);
  const studyMode = useSelector((state: State) => state.mainStudyMode.studyModes);
  const clonedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  let usedWords;
  if (studyMode.trainAllWords) {
    usedWords = clonedWords.filter((word) => (word || word.userWord) && (word || !word.userWord.optional.del));
  }
  if (studyMode.onlyNew) {
    usedWords = clonedWords.filter((word) => !word.userWord.optional.played);
  }
  if (studyMode.onlyRepeat) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.repeatTimes > 0 || !word);
  }
  if (studyMode.onlyDifficult) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.del || !word);
  }

  const data = usedWords[index];
  const prevData = usedWords[index - 1];
  const cardsToTrain = usedWords.length;
  const totalCardsToTrain = amount.cards;
  const inputWidth = data.word.length * 12;
  const isStatisticOpen = useSelector((
    state: State,
  ) => state.trainingStatistic.isTrainingStatisticOpen);
  const [inputData, setInputData] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [successRow, setSuccessRow] = useState(0);
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);
  const totalIndex = useSelector((state: State) => state.training.totalProgress);
  const isAnswerChecked = useSelector((state: State) => state.training.isChecked);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  const showWordExample = settingsState.example;
  const showWordMeaning = settingsState.wordMeaning;
  const showWordImage = settingsState.showImage;
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);
  const showHelpBTN = settingsState.showAnswerBtn;
  const showDeleteBTN = settingsState.deleteWordBtn;
  const showDifficultBTN = settingsState.difficultWordBtn;
  const playAudioSetting = settingsState.autoPronounce;
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
      if (isAnswerCorrect && playAudioSetting && !delActive && !difActive) {
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
        handleAudio();
      }
    }
  });

  const getUrl = () => {
    if (showWordImage && (isAnswerCorrect || index < cardsToTrain)) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.image}`;
    if (!showWordImage && (isAnswerCorrect || index >= cardsToTrain)) return checkMarkImage;
    if (showWordImage && (isAnswerCorrect || index >= cardsToTrain)) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${prevData.image}`;
    return questionMarkImage;
  };

  const imgURL = getUrl();
  const nextCardBTNClass = canMoveToNext ? 'next-card-btn btn btn-success shadow my-2' : 'btn invisible my-2';
  const helpBTNClass = showHelpBTN ? 'btn btn-info shadow my-1' : 'd-none';
  const deleteBTNClass = (showDeleteBTN && canMoveToNext) ? 'btn btn-info shadow my-1' : 'd-none';
  const difficultBTNClass = (showDifficultBTN && canMoveToNext) ? 'btn btn-info shadow my-1' : 'd-none';

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!canMoveToNext) {
      setInputData(event.target.value);
    }
  };

  const audioHandler = () => {
    const event = new Event('click');
    wordAudio.dispatchEvent(event);
    meaningAudio.dispatchEvent(event);
    exampleAudio.dispatchEvent(event);
  };

  const [delMes, showDelMes] = useState(false);
  const [mes, setMes] = useState('');
  const [delActive, setDelActive] = useState(false);
  const [difActive, setDifActive] = useState(false);
  const [isWordSuccess, setSuccess] = useState(false);

  const checkAnswerBTNHandler = () => {
    if (!canMoveToNext && !isAnswerChecked && inputData.length > 0) {
      dispatch(setInputWord(inputData));
      setInputData('');
      if (inputData.toLowerCase() === data.word.toLowerCase()) {
        if (isSuccess) setSuccessRow(successRow + 1);
        setSuccess(true);
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

  interface Prop {
    played: boolean;
    repeatTimes: number;
    date: string;
    time: string;
    del: boolean;
    dif: boolean;
    lastRepeat: string;
    nextRepeat: string;
  }

  const propObject = {} as Prop;
  const optional = {
    optional: propObject,
  };

  const deleteWord = () => {
    audioHandler();
    setDelActive(true);
    setMes('deleted');
    showDelMes(true);
  };

  const setAsDifficult = () => {
    audioHandler();
    setDifActive(true);
    setMes('added to difficult');
    showDelMes(true);
  };

  const nextCardBTNHandler = () => {
    audioHandler();
    showDelMes(false);

    const clone = Array.from(clonedWords);
    const currentWord = usedWords[index];
    const handledWord = { ...currentWord };
    if (handledWord.userWord.optional.played) {
      handledWord.userWord.optional.repeatTimes === undefined
        ? handledWord.userWord.optional.repeatTimes = 0
        : +handledWord.userWord.optional.repeatTimes++;
      !handledWord.userWord.optional.lastRepeat
        ? handledWord.userWord.optional.lastRepeat = `${new Date().toDateString().slice(3, -4)} ${new Date().toLocaleTimeString().slice(0, -3)}`
        : handledWord.userWord.optional.lastRepeat = `${new Date().toDateString().slice(3, -4)} ${new Date().toLocaleTimeString().slice(0, -3)}`;
      !handledWord.userWord.optional.nextRepeat
        ? handledWord.userWord.optional.nextRepeat = `${new Date(new Date().getTime() + 1000 * 60 * 5).toLocaleTimeString().slice(0, -3)}`
        : handledWord.userWord.optional.nextRepeat = `${new Date(new Date().getTime() + 1000 * 60 * 5).toLocaleTimeString().slice(0, -3)}`;
      if (isWordSuccess && !handledWord.userWord.optional.success) {
        handledWord.userWord.optional.success = 1;
      } else if (handledWord.userWord.optional.success === 8) {
        handledWord.userWord.optional.del = true;
      } else {
        +handledWord.userWord.optional.success++;
      }
      if (delActive) {
        handledWord.userWord.optional.del = true;
        handledWord.userWord.optional.dif = false;
        handledWord.userWord.optional.nextRepeat = '-';
      }
      if (difActive) {
        handledWord.userWord.optional.dif = true;
      }
      clone.splice(clonedWords.indexOf(currentWord), 1, handledWord);
      dispatch(updateUserWords(clone));
      updateUserWord(handledWord, dispatch);
      setDelActive(false);
      setDifActive(false);
    } else {
      propObject.played = true;
      propObject.repeatTimes = 0;
      propObject.date = new Date().toDateString();
      propObject.time = new Date().toTimeString();
      propObject.lastRepeat = `${new Date().toDateString().slice(0, -4)} ${new Date().toLocaleTimeString().slice(0, -3)}`;
      propObject.nextRepeat = `${new Date(new Date().getTime() + 1000 * 60 * 5).toDateString()}`;
      handledWord.userWord = optional;
      if (delActive) {
        handledWord.userWord.optional.del = true;
        handledWord.userWord.optional.dif = false;
      }
      if (difActive) {
        handledWord.userWord.optional.dif = true;
        handledWord.userWord.optional.del = false;
      }
      clone.splice(index, 1, handledWord);
      dispatch(updateUserWords(clone));
      dispatch(updateNewCardProgress());
      dispatch(updateGameCardProgress());
      createUserWord(handledWord, dispatch);
      setDelActive(false);
      setDifActive(false);
    }
    if (isSuccess) {
      dispatch(addToSuccessTraining(data));
    } else {
      dispatch(addToFailedTraining(data));
    }

    setIsSuccess(true);
    index < usedWords.length - 1
    && dispatch(progressTraining());
    dispatch(addRowOfSuccess(successRow));
    if ((index === cardsToTrain - 1 || totalIndex === totalCardsToTrain - 1) && !isStatisticOpen) {
      dispatch(toggleTrainingStatistic(true));
    }
  };

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => { event.preventDefault(); checkAnswerBTNHandler(); };

  return (
    <div className="training-card-wrapper shadow">
      <div className="training-card-content">
        <div
          className={
            delMes
              ? 'training-card-info training-card-info-deleted'
              : 'training-card-info'
          }
        >
          {delMes
            ? <span>{mes}</span>
            : <TrainingCardFields />}
          <form
            action=""
            className={
              delMes
                ? 'checking-form m-auto disabled'
                : 'checking-form m-auto'
            }
            id="checking-form"
            style={{ width: `${inputWidth}px` }}
            onSubmit={formSubmitHandler}
          >
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
            className="btn btn-info shadow my-1"
            type="button"
            onClick={checkAnswerBTNHandler}
          >
            {usedLang.buttons.checkBTN}
          </button>
          <button
            type="button"
            className={helpBTNClass}
            onClick={helpBTNHandler}
          >
            {usedLang.buttons.showAnswerBTN}
          </button>

          <button
            type="button"
            className={deleteBTNClass}
            onClick={deleteWord}
          >
            {usedLang.buttons.deleteBTN}
          </button>
          <button
            type="button"
            onClick={setAsDifficult}
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
