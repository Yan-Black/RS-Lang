import { Action } from 'redux';
import {
  ADD_FAILED,
  REMOVE_FAILED,
  ADD_SUCCESS,
  REMOVE_SUCCESS,
  OPEN_RESULTS,
  CLOSE_RESULTS,
} from './types';
import { ActionResults } from '../../Models';

export const addSuccess = (str: string): ActionResults => ({
  type: ADD_SUCCESS,
  payload: str,
});

export const reomveSuccess = (): ActionResults => ({
  type: REMOVE_SUCCESS,
});

export const addFailed = (str: string): ActionResults => ({
  type: ADD_FAILED,
  payload: str,
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
