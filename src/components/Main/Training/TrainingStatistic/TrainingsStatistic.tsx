import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { State } from 'models';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTrainingStatistic } from 'containers/Main/Training/actions';
// import { Link } from 'react-router-dom';

function TrainingStatistic(): JSX.Element {
  const dispatch = useDispatch();
  const isStatisticOpen = useSelector((
    state: State,
  ) => state.trainingStatistic.isTrainingStatisticOpen);
  const successWords = useSelector((
    state: State,
  ) => state.trainingStatistic.successWordTraining);
  const failedWords = useSelector((
    state: State,
  ) => state.trainingStatistic.failedWordsTraining);
  const successRow = useSelector((
    state: State,
  ) => state.trainingStatistic.correctAnswersInRow);

  const cardsCount = +successWords.length + +failedWords.length;
  const correctPersent = Math.ceil((successWords.length * 100) / cardsCount);

  const btnClickHandler = () => {
    dispatch(toggleTrainingStatistic(false));
  };
  return (
    <Modal show={isStatisticOpen} dialogClassName="mt-5 pt-5" onHide={btnClickHandler}>
      <Modal.Header>
        <Modal.Title>Дневная норма выполнена</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="training-statistic-fields d-flex flex-column my-2">
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-primary">Карточек пройдено:</span>
            <span className="font-weight-bold">{cardsCount}</span>
          </div>
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-success">Правильные ответы:</span>
            <span className="font-weight-bold">
              {correctPersent}
              %
            </span>
          </div>
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-warning">Новые слова:</span>
            <span className="font-weight-bold">25</span>
          </div>
          <div className="d-flex justify-content-between border-bottom my-2">
            <span className="text-info">Самая длинная серия правильных ответов:</span>
            <span className="font-weight-bold">{successRow}</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Link to="/Main"> */}
        <Button variant="primary" onClick={btnClickHandler}>
          На главную
        </Button>
        {/* </Link> */}
      </Modal.Footer>
    </Modal>
  );
}

export default TrainingStatistic;
