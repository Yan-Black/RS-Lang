import * as React from 'react';
import { WordObj } from 'containers/Dictionary/models';
import unDelete from 'assets/Undelete-icon.svg';
import { deletedList } from '../temporaryData';
import DictionaryItem from '../DictionaryItem';

function Deleted(): JSX.Element {
  const deletedWords: Array<WordObj> = deletedList;
  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3" style={{ minHeight: '90vh' }}>
      <p className="font-weight-bold border-bottom py-2">УДАЛЕННЫЕ СЛОВА</p>
      {deletedWords.map((element) => (
        <div className="d-flex align-items-center" key={element.id}>
          <DictionaryItem item={element} key={element.id} />
          <button className="btn btn-outline-primary shadow rounded-circle p-1 m-1" type="button" style={{ width: '55px', height: '55px' }} data-toggle="tooltip" data-placement="left" title="Вернуть в изучаемые">
            <div style={{
              width: '40px', height: '40px', background: `url(${unDelete})`, backgroundSize: 'contain',
            }}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Deleted;
