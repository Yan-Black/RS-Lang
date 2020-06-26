/* eslint-disable max-len */
import * as Models from 'models';
import { ActionType } from './constants';

const initialState = {
  page: 'START_PAGE',
  level: '1',
  round: '1',
  // vocabWords: [],
  // fetchedWords: [],
  currentWords: [],
  translateOptions: [],
};

interface AnswerInitState {
  btnTitle: string,
  isChecked: boolean,
  isCorrect: boolean,
  isWrong: boolean,
  progress: number,
}

const answerInitState = <AnswerInitState> {
  btnTitle: ' НЕ ЗНАЮ',
  isChecked: false,
  isCorrect: false,
  isWrong: false,
  progress: 0,
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
const currWordsReducer: Models.Reducer<unknown> = (state = initialState.currentWords, { type, payload }) => {
  switch (type) {
    case ActionType.INIT_WORDS:
      return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    case ActionType.FETCH_WORDS:
      return payload;
    default:
      return state;
  }
};

const answerReducer: Models.Reducer<unknown> = (state: AnswerInitState = answerInitState, { type, payload }): AnswerInitState => {
  switch (type) {
    case ActionType.CHECK_ANSWER:
      // console.log(payload);
      return {
        // eslint-disable-next-line max-len
        ...state, isChecked: payload, isCorrect: false, isWrong: false,
      };
    case ActionType.CORRECT_ANSWER:
      return {
        ...state, isCorrect: payload, isWrong: !payload,
      };
    case ActionType.WRONG_ANSWER:
      return {
        ...state, isWrong: payload, isCorrect: !payload,
      };
    case ActionType.PROGRESS_GAME:
      return {
        ...state, progress: state.progress + 1,
      };
    case ActionType.RESET_GAME:
      return answerInitState;
    default:
      return state;
  }
};

// const buttonReducer

export {
  pageReducer, levelReducer, roundReducer, currWordsReducer, answerReducer,
};
