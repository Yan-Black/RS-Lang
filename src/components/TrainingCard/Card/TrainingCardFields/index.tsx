import * as React from 'react';
import { useSelector } from 'react-redux';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { State } from 'models';

function TrainingCardFields(): JSX.Element {
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const cardsToTrain = amount.cards;
  const index = useSelector((state: State) => state.training.currIndex);
  const usedData: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const usedWords = usedData.filter(
    (word) => !word.userWord.optional.del,
  );

  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  // to do change data to data from dictionary
  const data = usedWords[index];
  const showWordTranslate = settingsState.translate;
  const showWordExample = settingsState.example;
  const showWordMeaning = settingsState.wordMeaning;
  const showWordTranscription = settingsState.showTranscription;
  const showAllTranslates = settingsState.showTextTranslate;
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);

  const translateClass = (showWordTranslate || (showAllTranslates && (isAnswerCorrect || index >= cardsToTrain))) ? 'training-card-translate' : 'invisible';
  const exampleClass = showWordExample ? 'training-card-example' : 'invisible';
  const meaningClass = showWordMeaning ? 'training-card-meaning' : 'invisible';
  const transcriptionClass = (showWordTranscription && (isAnswerCorrect || index >= cardsToTrain)) ? 'training-card-transcript text-danger' : 'invisible';
  const exampleTranslateClass = ((showWordExample && showAllTranslates) && (isAnswerCorrect || index >= cardsToTrain)) ? 'translate' : 'invisible';
  const meaningTranslateClass = ((showWordMeaning && showAllTranslates) && (isAnswerCorrect || index >= cardsToTrain)) ? 'translate' : 'invisible';
  const wordClass = isAnswerCorrect || index >= cardsToTrain ? 'training-card-word text-primary' : 'training-card-word invisible';

  // to do fix the next function: change filter to find word
  function getInnerText(text: string, word: string) {
    const textField = [];
    text.split(' ').map((el) => {
      if (el.toLowerCase() === word.toLowerCase()) textField.push('[......]');
      else textField.push(el);
      return el;
    });
    return textField.join(' ');
  }

  const textExample = (
    showWordExample && !isAnswerCorrect && index < cardsToTrain)
    ? getInnerText(data.textExample, data.word) : data.textExample;
  const textMeaning = (
    showWordMeaning && !isAnswerCorrect && index < cardsToTrain)
    ? getInnerText(data.textMeaning, data.word) : data.textMeaning;

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
      <span className={meaningClass}>
        {textMeaning}
      </span>
      <span className={meaningTranslateClass}>
        {data.textMeaningTranslate}
      </span>
      <span className={exampleClass}>
        {textExample}
      </span>
      <span className={exampleTranslateClass}>
        {data.textExampleTranslate}
      </span>
    </>
  );
}

export default TrainingCardFields;
