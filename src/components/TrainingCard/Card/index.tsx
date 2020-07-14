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
import book1 from 'constants/words-constants';
import TrainingCardFields from 'components/TrainingCard/Card/TrainingCardFields';
import CheckedAnswer from 'components/TrainingCard/Card/CheckedAnswer';
import {
  setInputWord, toggleAnswerCorrect, toggleMoveToNext,
  addToSuccessTraining, addToFailedTraining, progressTraining,
  addRowOfSuccess, toggleTrainingStatistic, updateUserWords,
} from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';

const Card: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  const dispatch = useDispatch();
  const index = useSelector((state: State) => state.training.currIndex);
  const usedWords: FetchedWordData[] = useSelector(
    (state: State) => state.appUserWords.userWords
      .filter((word: FetchedWordData) => !word.deleted),
  );
  const data = usedWords[index];
  const prevData = usedWords[index - 1];
  // const data: FetchedWordData = book1[0][index];
  // const prevData: FetchedWordData = book1[0][index - 1];
  const cardsToTrain = amount.words;
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
        const clone = Array.from(usedWords);
        const currentWord = clone[index];
        const handledWord = { ...currentWord };
        handledWord.success
        && handledWord.success === 2
          ? handledWord.deleted = true
          : null;
        !handledWord.success
          ? handledWord.success = 1
          : handledWord.success++;
        clone.splice(usedWords.indexOf(data), 1, handledWord);
        dispatch(updateUserWords(clone));
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

  const [delMes, showDelMes] = useState(false);
  const [mes, setMes] = useState('');

  const deleteWord = () => {
    const currentWord = usedWords[index];
    const handledWord = { ...currentWord };
    handledWord.deleted = true;
    !usedWords[index].played
    && usedWords.splice(usedWords.indexOf(data), 1, handledWord);
    dispatch(updateUserWords(usedWords));
    dispatch(toggleMoveToNext());
    setMes('deleted');
    showDelMes(true);
  };

  const setAsDifficult = () => {
    const currentWord = usedWords[index];
    const handledWord = { ...currentWord };
    handledWord.difficult = true;
    !usedWords[index].played
    && usedWords.splice(usedWords.indexOf(data), 1, handledWord);
    dispatch(updateUserWords(usedWords));
    dispatch(toggleMoveToNext());
    setMes('added to difficult');
    showDelMes(true);
  };

  const nextCardBTNHandler = () => {
    showDelMes(false);
    const event = new Event('click');
    const clone = Array.from(usedWords);
    const currentWord = clone[index];
    const handledWord = { ...currentWord };
    if (handledWord.played) {
      handledWord.repeatTimes++;
      clone.splice(usedWords.indexOf(data), 1, handledWord);
      dispatch(updateUserWords(clone));
    } else {
      handledWord.played = true;
      handledWord.repeatTimes = 0;
      handledWord.date = new Date().toDateString();
      handledWord.time = new Date().toTimeString();
      !usedWords[index].played
      && clone.splice(usedWords.indexOf(data), 1, handledWord);
      dispatch(updateUserWords(clone));
    }
    if (isSuccess) {
      dispatch(addToSuccessTraining(data));
    } else {
      dispatch(addToFailedTraining(data));
    }
    wordAudio.dispatchEvent(event);
    meaningAudio.dispatchEvent(event);
    exampleAudio.dispatchEvent(event);
    setIsSuccess(true);
    index < usedWords.length - 1
    && dispatch(progressTraining());
    dispatch(addRowOfSuccess(successRow));
    if (index === cardsToTrain - 1 && !isStatisticOpen) {
      dispatch(toggleTrainingStatistic(true));
    }
  };

  console.log(usedWords);

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
