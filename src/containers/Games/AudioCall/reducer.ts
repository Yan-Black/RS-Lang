import * as Models from 'models';
import { ActionType } from './constants';

const initialState = {
  page: 'START_PAGE',
  level: '3',
  round: '5',
  // vocabWords: [],
  // fetchedWords: [],
  currentWords: [],
  translateOptions: [],
};

// eslint-disable-next-line max-len
const pageReducer: Models.Reducer<unknown> = (state = initialState.page, { type /* payload */ }) => {
  switch (type) {
    case ActionType.START_PAGE:
      return type;
    case ActionType.GAME_PAGE:
      return type;
    case ActionType.STATISTIC_PAGE:
      return type;
    default:
      return state;
  }
};

const levelReducer: Models.Reducer<unknown> = (state = initialState.level, { type, payload }) => {
  switch (type) {
    case ActionType.LVL:
      return payload;
    default:
      return state;
  }
};

const roundReducer: Models.Reducer<unknown> = (state = initialState.round, { type, payload }) => {
  switch (type) {
    case ActionType.RND:
      return payload;
    default:
      return state;
  }
};

// eslint-disable-next-line max-len
const currWordsReducer: Models.Reducer<unknown> = (state = initialState.currentWords, { type /* payload */ }) => {
  switch (type) {
    case ActionType.INIT_WORDS:
      return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    case ActionType.FETCH_WORDS:
      return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    default:
      return state;
  }
};

// const buttonReducer

export {
  pageReducer, levelReducer, roundReducer, currWordsReducer,
};
