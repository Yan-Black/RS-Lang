/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { statisticPage, startPage } from 'containers/Games/AudioCall/actions';
import speakerIcon from './speaker_Icon.svg';
// const logo = require("./speaker_Icon.svg");
// import speakerIcon from './megaphone.png';
// import speakerIcon from './0.svg';
import TranslateOptions from './translateOptions';

function GamePage(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="bg-info align-middle" style={{ height: '100vh' }}>
      <div className="progress bg-info" style={{ height: '5px' }}>
        <div className="progress-bar bg-light" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="p-3 mb-2 bg-info text-white text-center align-items-center">
        <img src={speakerIcon} alt="" />
        <div className="p-3 bg-info text-right">
          <Link to="/Main" onClick={() => dispatch(startPage())}><i className="fas fa-times" /></Link>
        </div>
        <i className="fas fa-volume-up my-5" style={{ cursor: 'pointer' }} />
        <TranslateOptions />
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
