/* eslint-disable @typescript-eslint/no-unsafe-call */
import {BACKGROUND_WORD, FETCH_WORDS, TRANSLATE_WORD} from './types';

export const fetchWords = (group: number) => async (dispatch: any) => {
  const page = Math.floor(0 + Math.random() * (29 + 1 - 0));
  const response = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group - 1}`);
  const json = await response.json();
  dispatch({ type: FETCH_WORDS, payload: json.slice(0, 10) });
};

export const translateWord = (translate: string) => (dispatch: any) => {
  dispatch({ type: TRANSLATE_WORD, payload: translate });
};

export const backgroundWord = (data: string) => (dispatch: any) => {
  const urlImg = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${data}`;
  dispatch({ type: BACKGROUND_WORD, payload: urlImg });
}
