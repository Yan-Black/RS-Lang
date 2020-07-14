import * as React from 'react';
import { WordObj } from 'containers/Dictionary/models';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { ru, eng } from 'constants/dictionary-constants';
import DictionaryItem from '../DictionaryItem';

function Learning(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const learningWords: Array<WordObj> = useSelector(
    (state: State) => state.dictionaryState.learningWords,
  );

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3">
      <p className="font-weight-bold border-bottom text-uppercase py-2">
        {usedLang.learningWords}
        {' '}
        (
        {learningWords.length}
        )
      </p>
      {learningWords.map((element) => <DictionaryItem item={element} key={element.word} />)}
    </div>
  );
}

export default Learning;
