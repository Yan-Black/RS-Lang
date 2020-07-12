import * as React from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { WordObj } from 'containers/Dictionary/models';
import { deletedToLearning } from 'containers/Dictionary/actions';
import { ru } from 'constants/dictionary-constants';
import DictionaryItem from '../DictionaryItem';

function Deleted(): JSX.Element {
  // to do use lang from store
  const usedLang = ru;
  const dispatch = useDispatch();
  const deletedWords: Array<WordObj> = useSelector(
    (state: State) => state.dictionaryState.deletedWords,
  );

  const btnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedId = event.currentTarget.id;
    const clickedWord = deletedWords.filter((wordItem) => wordItem.id === clickedId);
    dispatch(deletedToLearning(clickedWord));
  };

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3">
      <p className="font-weight-bold border-bottom text-uppercase py-2">
        {usedLang.deletedWords}
        {' '}
        (
        {deletedWords.length}
        )
      </p>
      {deletedWords.map((element) => (
        <div className="d-flex align-items-center" key={element.id}>
          <DictionaryItem item={element} key={element.word} />
          <button
            className="btn btn-deleted-words btn-outline-primary shadow rounded-circle p-1 m-1"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title={usedLang.returnToLearning}
            id={element.id}
            onClick={btnClickHandler}
          >
            <div className="undelete-icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Deleted;
