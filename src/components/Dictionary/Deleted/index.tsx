import * as React from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { WordObj } from 'containers/Dictionary/models';
import { deletedToLearning } from 'containers/Dictionary/actions';
import DictionaryItem from '../DictionaryItem';

function Deleted(): JSX.Element {
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
      <p className="font-weight-bold border-bottom py-2">
        УДАЛЕННЫЕ СЛОВА (
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
            title="Вернуть в изучаемые"
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
