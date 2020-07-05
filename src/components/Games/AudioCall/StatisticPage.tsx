import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from 'models';
import { Json } from 'containers/Games/AudioCall/models';
import { startPage, resetCurrStatistic } from 'containers/Games/AudioCall/actions';
import backgroundImage from 'assets/pattern-369543.svg';
import StatisticItem from './StatisticItem';

function StatisticPage(): JSX.Element {
  function getTitle(first: number, second: number): string {
    const diff = first - second;
    switch (diff) {
      case 0:
      case 2:
      case -2:
        return 'Неплохо, но нужно больше усилий';
      case 10:
        return 'Великолепно! Так держать!';
      case 8:
      case 6:
      case 4:
        return 'Хорошо, но есть над чем поработать';
      case -10:
        return 'Неудача, продолжайте тренироваться';
      default:
        return 'Нужно чаще повторять слова';
    }
  }

  const dispatch = useDispatch();
  const knowWords: Array<Json> = useSelector(
    (state: State) => state.audioCallStatistic.correctAnswers,
  );
  const notKnowWords: Array<Json> = useSelector(
    (state: State) => state.audioCallStatistic.wrongAnswers,
  );
  const statisticTitle = getTitle(knowWords.length, notKnowWords.length);
  const btnClickHandler = () => {
    dispatch(resetCurrStatistic());
    dispatch(startPage());
  };

  return (
    <div className="py-5" style={{ height: '100%', background: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="container bg-light rounded mx-auto p-3" style={{ maxWidth: '600px' }}>
        <p className="text-dark text-center mb-5" style={{ fontSize: '2rem' }}>{statisticTitle}</p>
        <div className="bg-light mx-5 text-dark" style={{ overflowY: 'scroll', maxHeight: '50vh' }}>
          <div className="d-flex pb-3 bg-light text-dark flex-column border-bottom">
            <p className="text-danger my-1">
              ОШИБОК:&nbsp;
              {notKnowWords.length}
            </p>
            {
              notKnowWords.map((word) => <StatisticItem item={word} key={word.word} />)
            }
          </div>
          <div className="d-flex bg-light text-dark flex-column">
            <p className="text-success mb-1 mt-3">
              ЗНАЮ:&nbsp;
              {knowWords.length}
            </p>
            { knowWords.map((word) => <StatisticItem item={word} key={word.word} />)}
          </div>
        </div>
        <div className="d-flex bg-light justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-light border text-primary mr-5"
            onClick={btnClickHandler}
          >
            ИГРАТЬ СНОВА
          </button>
          <Link to="/Main">
            <button
              type="button"
              className="btn btn-light border text-primary mr-5"
              style={{ cursor: 'pointer' }}
              onClick={btnClickHandler}
            >
              НА ГЛАВНУЮ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StatisticPage;
