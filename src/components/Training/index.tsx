import * as React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';
import { State } from 'models';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';
import Card from './Card';
import './index.scss';
import AnkiBtns from './Card/AnkiBtns';
import AppSettings from './Card/AppSettings';

const Training: React.FC = () => {
  const index = useSelector((state: State) => state.training.currIndex);
  const cardsToTrain = 40;
  const done = Math.ceil((index * 100) / cardsToTrain);
  return (
    <div className="training-page-wrapper">
      {/* <Link to="/Main"> */}
      <button
        type="button"
      >
        Back
      </button>
      {/* </Link> */}
      <AppSettings />
      <Card />
      <ProgressBar className="training-progress" now={done} label={`${done}%`} />
      <AnkiBtns />
    </div>
  );
};

export default Training;
