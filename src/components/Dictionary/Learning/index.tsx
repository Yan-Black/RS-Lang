import * as React from 'react';
import { WordObj } from 'containers/Dictionary/models';
import { useSelector } from 'react-redux';
import { State } from 'models';
import DictionaryItem from '../DictionaryItem';

function Learning(): JSX.Element {
  const learningWords: Array<WordObj> = useSelector(
    (state: State) => state.dictionaryState.learningWords,
  );

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3" style={{ minHeight: '90vh' }}>
      <p className="font-weight-bold border-bottom py-2">
        ИЗУЧАЕМЫЕ СЛОВА (
        {learningWords.length}
        )
      </p>
      {learningWords.map((element) => <DictionaryItem item={element} key={element.word} />)}
    </div>
  );
}

export default Learning;
