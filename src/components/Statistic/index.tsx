import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { State } from 'models';
import { useSelector } from 'react-redux';
import { ru, eng } from 'constants/dictionary-constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import View from 'components/Dictionary/View';

function Statistic() {
  const stat = {
    days: ['10 июля', '11 июля', '12 июля', '13 июля', '14 июля'],
    wordsToDays: [20, 10, 20, 50, 35],
  };

  function getSums(arr) {
    const result = [];
    if (!arr.length) return result;

    const totalSum = arr.reduce((sum: number, item: number) => {
      result.push(sum);
      return sum + item;
    });
    result.push(totalSum);
    return result;
  }
  const allWords = getSums(stat.wordsToDays);

  const data = {
    labels: stat.days,
    datasets: [
      {
        label: 'Изученные за сегодня',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: stat.wordsToDays,
      },
      {
        label: 'Все изученные слова',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#7ca6de',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: allWords,
      },
    ],
  };

  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const [currPage, setCurrPage] = useState('learning');
  const btnClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setCurrPage(event.currentTarget.id);

  return (
    <div className="statistic-page">
      <Link to="/"><FontAwesomeIcon icon={faTimesCircle} className="statistic-image" /></Link>
      <p className="statistic-title">Статистика изучаемых слов</p>
      <div className="statistic-graf">
        <Line data={data} />
      </div>

      <div className="dictionary-btn-container statistic-button d-flex">
        <button
          type="submit"
          className="btn dictionary-btn btn-outline-primary mx-1"
          id="learning"
          onClick={btnClickHandler}
        >
          {usedLang.learningWords}
        </button>
        <button
          type="submit"
          className="btn dictionary-btn btn-outline-primary mx-1"
          id="difficult"
          onClick={btnClickHandler}
        >
          {usedLang.difficultWords}
        </button>
        <button
          type="submit"
          className="btn dictionary-btn btn-outline-primary mx-1"
          id="deleted"
          onClick={btnClickHandler}
        >
          {usedLang.deletedWords}
        </button>
      </div>
      <View dictionaryPage={currPage} />
    </div>
  );
}

export default Statistic;
