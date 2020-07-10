import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/Models';
import book1 from 'assets/WordsData';

function TrainingCardFields(): JSX.Element {
  const index = useSelector((state: State) => state.training.currIndex);
  // to do change data to data from dictionary
  const data: FetchedWordData = book1[0][index];
  const showWordTranslate = useSelector((state: State) => state.trainingSettings.showWordTranslate);
  const showWordExample = useSelector((state: State) => state.trainingSettings.showWordExample);
  const showWordMeaning = useSelector((state: State) => state.trainingSettings.showWordMeaning);
  const showWordTranscription = useSelector(
    (state: State) => state.trainingSettings.showWordTranscription,
  );
  const showAllTranslates = useSelector((state: State) => state.trainingSettings.showAllTranslates);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  // const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const translateClass = (showWordTranslate || (showAllTranslates && isAnswerCorrect)) ? 'training-card-translate' : 'invisible';
  const exampleClass = showWordExample ? 'training-card-example' : 'invisible';
  const meaningClass = showWordMeaning ? 'training-card-meaning' : 'invisible';
  const transcriptionClass = (showWordTranscription && isAnswerCorrect) ? 'training-card-transcript text-danger' : 'invisible';
  const exampleTranslateClass = ((showWordExample && showAllTranslates) && isAnswerCorrect) ? 'translate' : 'invisible';
  const meaningTranslateClass = ((showWordMeaning && showAllTranslates) && isAnswerCorrect) ? 'translate' : 'invisible';
  const wordClass = isAnswerCorrect ? 'training-card-word text-primary' : 'training-card-word invisible';

  // to do fix the next function: use filter to find word in triangle brackets and hide it
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
    showWordExample && !isAnswerCorrect)
    ? getInnerText(data.textExample, data.word) : data.textExample;
  const textMeaning = (
    showWordMeaning && !isAnswerCorrect)
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
