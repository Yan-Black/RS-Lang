import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';

function TranslateOptions(): JSX.Element {
  const currWords = useSelector((state: State) => state.audioCallCurrWords);

  return (
    <div className="options my-5 d-flex flex-wrap justify-content-center bg-info text-white">
      <div className="option bg-info mx-5" style={{ cursor: 'pointer' }}>
        <span>1&nbsp;</span>
        {currWords[0]}
      </div>
      <div className="option bg-info mx-5" style={{ cursor: 'pointer' }}>
        <span>2&nbsp;</span>
        {currWords[1]}
      </div>
      <div className="option bg-info mx-5" style={{ cursor: 'pointer' }}>
        <span>3&nbsp;</span>
        {currWords[2]}
      </div>
      <div className="option bg-info mx-5" style={{ cursor: 'pointer' }}>
        <span>4&nbsp;</span>
        {currWords[3]}
      </div>
      <div className="option bg-info mx-5" style={{ cursor: 'pointer' }}>
        <span>5&nbsp;</span>
        {currWords[4]}
      </div>
    </div>
  );
}

export default TranslateOptions;
