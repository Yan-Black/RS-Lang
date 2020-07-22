import { Action } from 'redux';
import { ActionType } from './constants';
import { SprintGetScore } from './models';

export const startSprint = (): Action => ({
  type: ActionType.START_SPRINT,
});

export const stopSprint = (): Action => ({
  type: ActionType.STOP_SPRINT,
});

export const startGameMode = (): Action => ({
  type: ActionType.START_GAME_MODE,
});

export const stopGameMode = (): Action => ({
  type: ActionType.STOP_GAME_MODE,
});

export const getScore = (num: number): SprintGetScore => ({
  type: ActionType.GET_SCORE,
  payload: num,
});

export const addErrors = () => ({
  type: ActionType.ADD_ERRORS,
});
