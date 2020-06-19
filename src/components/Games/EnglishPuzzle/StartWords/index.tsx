/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../models/state';
import Word from './Word';
import Loader from './Loader';
import Desctiption from './Description';
import './index.scss';

const StartWords: React.FunctionComponent = () => {
  const loading = useSelector((state: State) => state.loading.isLoading);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <div className="start-words">
      {actualWordsCollection ? (
        actualWordsCollection.map((el) => (
          <Word word={el.textExample} />
        ))
      ) : (null)}
      <Desctiption />
    </div>
  );
};
export default StartWords;
