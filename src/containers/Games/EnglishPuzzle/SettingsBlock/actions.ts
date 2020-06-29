import { Dispatch } from 'react';
import { FETCH_WORDS, UPDATE_PAGE, UPDATE_GROUP } from './types';
import { showLoader, hideLoader } from '../StartWords/actions';
import { ActionWords, ActionPages, FetchedWordData } from '../Models';

export const getFirstChunk = (
  page: number, group: number,
) => async (
  dispatch: Dispatch<ActionWords>,
): Promise<void> => {
  dispatch(showLoader());
  const responce = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json: Array<FetchedWordData> = await responce.json();
  dispatch({ type: FETCH_WORDS, payload: json.slice(0, 10) });
  dispatch(hideLoader());
};

export const getLastChunk = (
  page: number, group: number,
) => async (
  dispatch: Dispatch<ActionWords>,
): Promise<void> => {
  dispatch(showLoader());
  const responce = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json: Array<FetchedWordData> = await responce.json();
  dispatch({ type: FETCH_WORDS, payload: json.slice(10, json.length) });
  dispatch(hideLoader());
};

export const updatePage = (num: number): ActionPages => ({
  type: UPDATE_PAGE,
  payload: num,
});

export const updateGrop = (num: number): ActionPages => ({
  type: UPDATE_GROUP,
  payload: num,
});
