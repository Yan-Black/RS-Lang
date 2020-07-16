import * as React from 'react';
import { useSelector } from 'react-redux';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { State } from 'models';

function TrainingCardFields(): JSX.Element {
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
    usedWords = clonedWords.filter((word) => word.userWord.optional.repeatTimes > 0);
  }
  if (studyMode.onlyDifficult) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.dif);
  }
  const cardsToTrain = usedWords.length;
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  // to do change data to data from dictionary
  const data = usedWords[index];
  const showWordTranslate = settingsState.translate;
  const showWordExample = settingsState.example;
  const showWordMeaning = settingsState.wordMeaning;
  const showWordTranscription = settingsState.showTranscription;
  const showAllTranslates = settingsState.showTextTranslate;
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);

  const translateClass = (showWordTranslate || (showAllTranslates && (isAnswerCorrect || index >= cardsToTrain))) ? 'training-card-translate text-dark' : 'invisible';
  const exampleClass = showWordExample ? 'training-card-example text-dark' : 'invisible';
  const meaningClass = showWordMeaning ? 'training-card-meaning text-dark' : 'invisible';
  const transcriptionClass = (showWordTranscription && (isAnswerCorrect || index >= cardsToTrain)) ? 'training-card-transcript text-danger' : 'invisible';
  const exampleTranslateClass = ((showWordExample && showAllTranslates) && (isAnswerCorrect || index >= cardsToTrain)) ? 'translate text-dark' : 'invisible';
  const meaningTranslateClass = ((showWordMeaning && showAllTranslates) && (isAnswerCorrect || index >= cardsToTrain)) ? 'translate text-dark' : 'invisible';
  const wordClass = isAnswerCorrect || index >= cardsToTrain ? 'training-card-word text-primary' : 'training-card-word invisible';

  function getInnerText(text: string) {
    const textField = [];
    text.split(' ').map((el) => {
      if (el.match(/<[a-z][a-z0-9]*>/gi)) textField.push('[......]');
      else textField.push(el);
      return el;
    });
    return textField.join(' ');
  }

  const textExample = (
    showWordExample && !isAnswerCorrect && index < cardsToTrain)
    ? getInnerText(data.textExample) : data.textExample;
  const textMeaning = (
    showWordMeaning && !isAnswerCorrect && index < cardsToTrain)
    ? getInnerText(data.textMeaning) : data.textMeaning;

  return (
    <>
      <span className={wordClass}>
        {data.word}
      </span>
      <span className={translateClass}>
        {data.wordTranslate}
      </span>
      <span className={transcriptionClass}>
        {data.transcription}
      </span>
      <span className={meaningClass} dangerouslySetInnerHTML={{ __html: `${textMeaning}` }} />
      <span className={meaningTranslateClass}>
        {data.textMeaningTranslate}
      </span>
      <span className={exampleClass} dangerouslySetInnerHTML={{ __html: `${textExample}` }} />
      <span className={exampleTranslateClass}>
        {data.textExampleTranslate}
      </span>
    </>
  );
}

export default TrainingCardFields;
