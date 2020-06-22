import * as Models from 'models';
import { ActionType } from './constants';

const initialState = 'START_PAGE';

const pageReducer: Models.Reducer<unknown> = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.START_PAGE:
      return initPage(state, payload);
    case ActionType.GAME_PAGE:
      return type;
    case ActionType.STATISTIC_PAGE:
      return type;
    default:
      return state;
  }
};

// const buttonReducer

const initPage = (state, payload) => {
  const newState = { ...state, payload };
  return newState;
};

export default pageReducer;
