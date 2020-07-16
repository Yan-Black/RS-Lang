import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { State } from 'models';
import { useSelector, useDispatch } from 'react-redux';
import { resetTrainingStatistic, toggleTrainingStatistic } from 'containers/TrainingCard/actions';
import { eng, ru } from 'constants/training-constants';
import { closeTraining } from 'containers/Training/action';

function TrainingStatistic(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const dispatch = useDispatch();
  const isStatisticOpen = useSelector((
    state: State,
  ) => state.trainingStatistic.isTrainingStatisticOpen);
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const totalIndex = useSelector((state: State) => state.training.totalProgress);
  const totalCardsToTrain = amount.cards;
  const modalTitle = totalIndex >= totalCardsToTrain
    ? usedLang.statistic.titleDailyRate
    : usedLang.statistic.titleSeries;
  const successWords = useSelector((
    state: State,
  ) => state.trainingStatistic.successWordTraining);
  const failedWords = useSelector((
    state: State,
  ) => state.trainingStatistic.failedWordsTraining);
  const successRow = useSelector((
    state: State,
  ) => state.trainingStatistic.correctAnswersInRow);

  const cardProgres = useSelector((state: State) => state.trainingStatistic.playedNewCards);
  const cardsCount = +successWords.length + +failedWords.length;
  const correctPercent = Math.ceil((successWords.length * 100) / cardsCount);

  const btnClickHandler = () => {
    dispatch(resetTrainingStatistic());
    dispatch(toggleTrainingStatistic(false));
    dispatch(closeTraining());
    // dispatch(resetTraining());
  };

  return (
    <Modal show={isStatisticOpen} dialogClassName="mt-5 pt-5">
      <Modal.Header>
        <Modal.Title>
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="training-statistic-fields d-flex flex-column my-2">
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-primary">{usedLang.statistic.cardsCompleted}</span>
            <span className="font-weight-bold">{cardsCount}</span>
          </div>
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-success">{usedLang.statistic.correctAnswers}</span>
            <span className="font-weight-bold">
              {correctPercent}
              %
            </span>
          </div>
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-warning">{usedLang.statistic.newWords}</span>
            <span className="font-weight-bold">{cardProgres}</span>
          </div>
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-info">{usedLang.statistic.longestCorrectSeries}</span>
            <span className="font-weight-bold">{successRow}</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={btnClickHandler}>
          {usedLang.buttons.toMain}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TrainingStatistic;
