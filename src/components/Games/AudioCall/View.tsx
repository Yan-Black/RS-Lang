import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import StartPage from './StartPage';
import GamePage from './GamePage';
import StatisticPage from './StatisticPage';

function View() {
  const dispatch = useDispatch();
  const page = useSelector((state: State) => state.audioCallPage);
  console.log(page);
  switch (page) {
    case 'START_PAGE':
      return (
        <StartPage />
      );
    case 'GAME_PAGE':
      return (
        <GamePage />
      );
    case 'STATISTIC_PAGE':
      return (
        <StatisticPage />
      );
    default:
      return (
        <StartPage />
      );
  }
}

export default View;
