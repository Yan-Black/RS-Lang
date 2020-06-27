import { FETCH_WORDS } from './types';

export const fetchWords = (group: number) => async (dispatch: any) => {
  const page = Math.floor(0 + Math.random() * (29 + 1 - 0));
  const responce = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json = await responce.json();
  dispatch({ type: FETCH_WORDS, payload: json });
};
