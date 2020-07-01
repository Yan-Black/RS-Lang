import { Dispatch } from 'react';
import { FETCH_WORDS, UPDATE_PAGE, UPDATE_GROUP } from './types';
import { ActionWords, ActionPages, FetchedWordData } from '../Models';

export const getWords = (
  page: number, group: number, arr: Array<Array<FetchedWordData>>,
) => (
  dispatch: Dispatch<ActionWords>,
): void => {
  const sliceStart = (page * 10) - 10;
  const sliceEnd = page * 10;
  dispatch({ type: FETCH_WORDS, payload: arr[group].slice(sliceStart, sliceEnd) });
};

export const updatePage = (num: number): ActionPages => ({
  type: UPDATE_PAGE,
  payload: num,
});

export const updateGrop = (num: number): ActionPages => ({
  type: UPDATE_GROUP,
  payload: num,
});
