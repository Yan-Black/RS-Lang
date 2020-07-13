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
import TrainingStatistic from './TrainingStatistic/TrainingsStatistic';

const Training: React.FC = () => {
  const index = useSelector((state: State) => state.training.currIndex);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  const cardsToTrain = 10;
  const done = isAnswerCorrect
    ? Math.ceil(((+index + 1) * 100) / cardsToTrain) : Math.ceil((index * 100) / cardsToTrain);
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
      <TrainingStatistic />
    </div>
  );
};

export default Training;
