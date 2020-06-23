import { Action } from 'redux';
import { INCREMENT, SET_TO_INITIAL } from './types';

export const incrementIdx = (): Action => ({
  type: INCREMENT,
});

export const setToInitial = (): Action => ({
  type: SET_TO_INITIAL,
});
