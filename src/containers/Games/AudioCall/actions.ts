import { ActionType } from './constants';
import { ActionCreator } from './models';

export const startPage: ActionCreator.StartPage = () => ({
  type: ActionType.START_PAGE,
});

export const gamePage: ActionCreator.GamePage = () => ({
  type: ActionType.GAME_PAGE,
});

export const statisticPage: ActionCreator.GamePage = () => ({
  type: ActionType.STATISTIC_PAGE,
});
