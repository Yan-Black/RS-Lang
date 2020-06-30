import {ACTIVE_WORD} from "./types";

export const activeWord = (num: number) => ({
  type: ACTIVE_WORD,
  payload: num,
});
