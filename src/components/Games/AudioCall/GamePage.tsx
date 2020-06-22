import * as React from 'react';
import { useDispatch } from 'react-redux';
import { statisticPage } from 'containers/Games/AudioCall/actions';

function GamePage() {
  const dispatch = useDispatch();

  return (
    <div className="bg-info align-middle" style={{ height: '100vh' }}>
      <div className="progress bg-info" style={{ height: '5px' }}>
        <div className="progress-bar bg-light" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="p-3 mb-2 bg-info text-white text-center align-items-center">

        <div className="p-3 bg-info text-right">
          <i className="fas fa-times" />
        </div>
        <i className="fas fa-volume-up my-5" />
        <div className="options my-5 d-flex flex-wrap justify-content-center bg-info text-white">
          <div className="option bg-info mx-5">
            <span>1&nbsp;</span>
            option
          </div>
          <div className="option bg-info mx-5">
            <span>2&nbsp;</span>
            option
          </div>
          <div className="option bg-info mx-5">
            <span>3&nbsp;</span>
            option
          </div>
          <div className="option bg-info mx-5">
            <span>4&nbsp;</span>
            option
          </div>
          <div className="option bg-info mx-5">
            <span>5&nbsp;</span>
            option
          </div>
        </div>
        <button
          className="btn btn-outline-light px-5"
          type="button"
          onClick={() => dispatch(statisticPage())}
        >
          НЕ ЗНАЮ
        </button>
      </div>
    </div>

  );
}

export default GamePage;
