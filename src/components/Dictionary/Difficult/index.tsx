import * as React from 'react';
import './index.scss';
import { WordObj } from 'containers/Dictionary/models';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { difficultToLearning } from 'containers/Dictionary/actions';
import { ru } from 'constants/dictionary-constants';
import DictionaryItem from '../DictionaryItem';

function Difficult(): JSX.Element {
  // to do use lang from store
  const usedLang = ru;
  const dispatch = useDispatch();
  const difficultWords: Array<WordObj> = useSelector(
    (state: State) => state.dictionaryState.difficultWords,
  );

  const btnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedId = event.currentTarget.id;
    const clickedWord = difficultWords.filter((wordItem) => wordItem.id === clickedId);
    dispatch(difficultToLearning(clickedWord));
  };

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3" style={{ minHeight: '90vh' }}>
      <p className="font-weight-bold border-bottom text-uppercase py-2">
        {usedLang.difficultWords}
        {' '}
        (
        {difficultWords.length}
        )
      </p>
      {difficultWords.map((element) => (
        <div className="d-flex align-items-center" key={element.id}>
          <DictionaryItem item={element} key={element.word} />
          <button
            className="btn btn-back-to-learning btn-outline-primary shadow rounded-circle p-1 m-1"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title={usedLang.returnToLearning}
            id={element.id}
            onClick={btnClickHandler}
          >
            <div className="back-to-learning-icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Difficult;
