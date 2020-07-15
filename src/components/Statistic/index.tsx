import * as React from 'react';
import { Line } from 'react-chartjs-2';
import './index.scss';

function Statistic() {

  const data = {
    labels: ['10 июля', '11 июля', '12 июля', '13 июля'],
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
        data: [0, 10, 20, 50],
      },
      {
        label: 'всего слов выученно',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,12,192,1)',
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
        data: [10, 30, 80],
      },
    ],
  };

  return (
    <div className="statistic-page">
      <h3>Статистика изучаемых слов</h3>
      <div className="statistic-graf">
        <Line data={data} />
      </div>
    </div>
  );
}

export default Statistic;
