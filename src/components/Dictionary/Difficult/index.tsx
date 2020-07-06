import * as React from 'react';
import { WordObj } from 'containers/Dictionary/models';
import backToLearning from 'assets/undo2.svg';
import { difficultList } from '../temporaryData';
import DictionaryItem from '../DictionaryItem';

function Difficult(): JSX.Element {
  const difficultWords: Array<WordObj> = difficultList;
  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3">
      <p className="font-weight-bold border-bottom py-2">СЛОЖНЫЕ СЛОВА</p>
      {difficultWords.map((element) => (
        <div className="d-flex align-items-center" key={element.id}>
          <DictionaryItem item={element} key={element.id} />
          <button className="btn btn-outline-primary shadow rounded-circle p-1 m-1" type="button" style={{ width: '55px', height: '55px' }} data-toggle="tooltip" data-placement="left" title="Вернуть в изучаемые">
            <div style={{
              width: '40px', height: '40px', background: `url(${backToLearning})`, backgroundSize: 'contain',
            }}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Difficult;
