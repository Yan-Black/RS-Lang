import * as React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import {
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { resetTrainingStatistic, toggleTrainingStatistic, resetTraining } from 'containers/TrainingCard/actions';
import Card from './Card';
import './index.scss';
import AnkiBtns from './Card/AnkiBtns';
import TrainingStatistic from './TrainingStatistic/TrainingsStatistic';

const Training: React.FC = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const index = useSelector((state: State) => state.training.currIndex);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);

  // to do set cardsToTrain = select words from all user's words using filter(studyMode)
  const cardsToTrain = amount.words;
  const done = isAnswerCorrect
    ? Math.ceil(((+index + 1) * 100) / cardsToTrain)
    : Math.ceil((index * 100) / cardsToTrain);

  const btnClickHandler = () => {
    dispatch(resetTrainingStatistic());
    dispatch(toggleTrainingStatistic(false));
    dispatch(resetTraining());
  };

  return (
    <div className="training-page-wrapper">
      <div className="p-4 mb-2 text-right">
        <Link to="/">
          <button
            type="button"
            className="btn btn-light"
            onClick={btnClickHandler}
          >
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
      </div>
      <Card />
      <ProgressBar className="training-progress" now={done} label={`${done}%`} />
      <AnkiBtns />
      <TrainingStatistic />
    </div>
  );
};

export default Training;
