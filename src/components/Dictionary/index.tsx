import * as React from 'react';
import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import View from './View.tsx';

function Dictionary(): JSX.Element {
  const [currPage, setCurrPage] = useState('learning');

  const btnClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setCurrPage(event.currentTarget.id);

  return (
    <div className="dictionary-wrapper p-2">
      <div className="dictionary-header bg-light rounded container py-2">
        <div className="title-container d-flex justify-content-between">
          <h4 className="dictionary-title text-uppercase display-4">мой словарь</h4>
          <Link to="/"><i className="fas fa-times" role="button" aria-label="Times icon" tabIndex={-1} /></Link>
        </div>
        <div className="dictionary-btn-container d-flex">
          <button
            type="submit"
            className="btn dictionary-btn btn-outline-primary mx-1"
            id="learning"
            onClick={btnClickHandler}
          >
            Изучаемые слова
          </button>
          <button
            type="submit"
            className="btn dictionary-btn btn-outline-primary mx-1"
            id="difficult"
            onClick={btnClickHandler}
          >
            Сложные слова
          </button>
          <button
            type="submit"
            className="btn dictionary-btn btn-outline-primary mx-1"
            id="deleted"
            onClick={btnClickHandler}
          >
            Удаленные слова
          </button>
        </div>
      </div>
      <View dictionaryPage={currPage} />
    </div>
  );
}

export default Dictionary;
