import * as React from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { deletedToLearning } from 'containers/Dictionary/actions';
import { ru, eng } from 'constants/dictionary-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import DictionaryItem from '../DictionaryItem';

function Deleted(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const dispatch = useDispatch();
  const usedWords: FetchedWordData[] = useSelector(
    (state: State) => state.appUserWords.userWords
      .filter((word: FetchedWordData) => word.deleted),
  );

  const btnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedId = event.currentTarget.id;
    const clickedWord = usedWords.filter((wordItem) => String(wordItem.id) === clickedId);
    delete clickedWord[0].deleted;
    dispatch(deletedToLearning(clickedWord));
  };

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3">
      <p className="font-weight-bold border-bottom text-uppercase py-2">
        {usedLang.deletedWords}
        {' '}
        (
        {usedWords.length}
        )
      </p>
      {usedWords.map((element) => (
        <div className="d-flex align-items-center" key={element.id}>
          <DictionaryItem item={element} key={element.word} />
          <button
            className="btn btn-deleted-words btn-outline-primary shadow rounded-circle p-1 m-1"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title={usedLang.returnToLearning}
            id={String(element.id)}
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
