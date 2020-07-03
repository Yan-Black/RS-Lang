import { Action } from 'redux';
import {
  ADD_FAILED,
  REMOVE_FAILED,
  ADD_SUCCESS,
  REMOVE_SUCCESS,
  OPEN_RESULTS,
  CLOSE_RESULTS,
} from './types';
import { ActionResults, SavedResult } from '../../Models';

export const addSuccess = (data: SavedResult): ActionResults => ({
  type: ADD_SUCCESS,
  payload: data,
});

export const reomveSuccess = (): ActionResults => ({
  type: REMOVE_SUCCESS,
});

export const addFailed = (data: SavedResult): ActionResults => ({
  type: ADD_FAILED,
  payload: data,
});

export const reomveFailed = (): ActionResults => ({
  type: REMOVE_FAILED,
});

export const openResults = (): Action => ({
  type: OPEN_RESULTS,
});

export const closeResults = (): Action => ({
  type: CLOSE_RESULTS,
});
