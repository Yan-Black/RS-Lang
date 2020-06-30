import {NEXT, RESET, SELECTED_GAME_WORD, START_GAME, STOP_GAME} from "./types";


export const startGame = () => ({
  type: START_GAME,
  payload: true
});

export const stopGame = () => ({
  type: STOP_GAME,
  payload: false
});

export const nextCard = () => ({
  type: NEXT,
  payload: 0
});

export const selectedWord = (value: string) => ({
  type: SELECTED_GAME_WORD,
  payload: value
});

export const resetGame = () => ({
  type: RESET,
  payload: null
});
