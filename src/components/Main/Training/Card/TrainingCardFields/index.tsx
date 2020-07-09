import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/Models';
import book1 from 'assets/WordsData';

function TrainingCardFields(): JSX.Element {
  const index = useSelector((state: State) => state.training.currIndex);
  const data: FetchedWordData = book1[0][index];
  const showWordTranslate = useSelector((state: State) => state.trainingSettings.showWordTranslate);
  const showWordExample = useSelector((state: State) => state.trainingSettings.showWordExample);
  const showWordMeaning = useSelector((state: State) => state.trainingSettings.showWordMeaning);
  const showWordTranscription = useSelector(
    (state: State) => state.trainingSettings.showWordTranscription,
  );
  const showAllTranslates = useSelector((state: State) => state.trainingSettings.showAllTranslates);
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const translateClass = (showWordTranslate || (showAllTranslates && canMoveToNext)) ? 'training-card-translate' : 'invisible';
  const exampleClass = showWordExample ? 'training-card-example' : 'invisible';
  const meaningClass = showWordMeaning ? 'training-card-meaning' : 'invisible';
  const transcriptionClass = (showWordTranscription && canMoveToNext) ? 'training-card-transcript text-danger' : 'invisible';
  const translatesClass = (showAllTranslates && canMoveToNext) ? 'translate' : 'invisible';
  const wordClass = canMoveToNext ? 'training-card-word text-primary' : 'training-card-word invisible';

  function getInnerText(text: string, word: string) {
    const textField = [];
    text.split(' ').map((el) => {
      if (el.toLowerCase() === word) textField.push('[......]');
      else textField.push(el);
      return el;
    });
    return textField.join(' ');
  }

  const textExample = (
    showWordExample && !canMoveToNext)
    ? getInnerText(data.textExample, data.word) : data.textExample;
  const textMeaning = (
    showWordMeaning && !canMoveToNext)
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
      <span className={translatesClass}>
        {data.textMeaningTranslate}
      </span>
      <span className={exampleClass}>
        {textExample}
      </span>
      <span className={translatesClass}>
        {data.textExampleTranslate}
      </span>
    </>
  );
}

export default TrainingCardFields;
