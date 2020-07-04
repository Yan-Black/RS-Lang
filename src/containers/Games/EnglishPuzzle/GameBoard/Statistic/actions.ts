import { Action } from 'redux';
import {
  ActionDate,
  ActionTimes,
  StatisticTimes,
  ActionLevels,
  StatisticLevels,
  ActionFailed,
  StatisticFailed,
  ActionSuccess,
  StatisticSuccess,
} from '../../Models';
import {
  OPEN_STATISTIC,
  CLOSE_STATISTIC,
  UPDATE_DATE,
  UPDATE_TIME,
  UPDATE_LEVELS,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
} from './types';

export const openStatistic = (): Action => ({
  type: OPEN_STATISTIC,
});

export const closeStatistic = (): Action => ({
  type: CLOSE_STATISTIC,
});

export const updateDate = (data: string): ActionDate => ({
  type: UPDATE_DATE,
  payload: data,
});

export const updateTime = (data: StatisticTimes): ActionTimes => ({
  type: UPDATE_TIME,
  payload: data,
});

export const updateLevels = (data: StatisticLevels): ActionLevels => ({
  type: UPDATE_LEVELS,
  payload: data,
});

export const updateFailed = (data: StatisticFailed): ActionFailed => ({
  type: UPDATE_FAILED,
  payload: data,
});

export const updateSuccess = (data: StatisticSuccess): ActionSuccess => ({
  type: UPDATE_SUCCESS,
  payload: data,
});
