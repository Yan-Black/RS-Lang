import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from 'models';
import { Json } from 'containers/Games/AudioCall/models';
import { startPage, resetCurrStatistic, toggleStatistic } from 'containers/Games/AudioCall/actions';
import backgroundImage from 'assets/pattern-369543.svg';
import ShortStatisticContent from './ShortStatisticContent';
import LongStatisticContent from './LongStatisticContent';

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
  const isLongStatistic = useSelector(
    (state: State) => state.audioCallStatistic.isLongStatistic,
  );
  const knowWords: Array<Json> = useSelector(
    (state: State) => state.audioCallStatistic.correctAnswers,
  );
  const notKnowWords: Array<Json> = useSelector(
    (state: State) => state.audioCallStatistic.wrongAnswers,
  );
  const statisticBTNClass = isLongStatistic ? 'd-none' : 'btn btn-light border text-primary mr-5 mb-1';
  const statisticTitle = getTitle(knowWords.length, notKnowWords.length);
  const statisticTitleClass = isLongStatistic ? 'd-none' : 'text-dark text-center mb-5';

  const btnClickHandler = () => {
    dispatch(resetCurrStatistic());
    dispatch(startPage());
  };

  const statisticBtnClickHandler = () => {
    dispatch(toggleStatistic());
  };

  return (
    <div className="py-5" style={{ height: '100vh', background: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="container bg-light rounded mx-auto p-3" style={{ maxWidth: '600px' }}>
        <p className={statisticTitleClass} style={{ fontSize: '2rem' }}>{statisticTitle}</p>
        <ShortStatisticContent />
        <LongStatisticContent />
        <div className="d-flex flex-wrap bg-light justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-light border text-primary mr-5 mb-1"
            onClick={btnClickHandler}
          >
            ИГРАТЬ СНОВА
          </button>
          <Link to="/">
            <button
              type="button"
              className={statisticBTNClass}
              onClick={statisticBtnClickHandler}
            >
              СТАТИСТИКА
            </button>
          </Link>
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
