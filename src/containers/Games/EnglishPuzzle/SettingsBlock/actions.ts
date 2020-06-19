/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FETCH_WORDS } from './types';
import { showLoader, hideLoader } from '../StartWords/actions';

export const getFirstChunk = (page: number, group: number) => async (dispatch: any) => {
  dispatch(showLoader());
  const responce = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json = await responce.json();
  dispatch({ type: FETCH_WORDS, payload: json.slice(0, 10) });
  dispatch(hideLoader());
};

export const getLastChunk = (page: number, group: number) => async (dispatch: any) => {
  dispatch(showLoader());
  const responce = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json = await responce.json();
  dispatch({ type: FETCH_WORDS, payload: json.slice(10, json.length) });
  dispatch(hideLoader());
};
