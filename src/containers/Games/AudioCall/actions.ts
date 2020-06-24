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

export const lvl: ActionCreator.Lvl = (level: string) => ({
  type: ActionType.LVL,
  payload: level,
});

export const rnd: ActionCreator.Rnd = (round: string) => ({
  type: ActionType.RND,
  payload: round,
});

export const initWords: ActionCreator.InitWords = () => ({
  type: ActionType.INIT_WORDS,
});

export const fetchWords: ActionCreator.FetchWords = (wordsObj) => ({
  type: ActionType.FETCH_WORDS,
  payload: wordsObj,
});
