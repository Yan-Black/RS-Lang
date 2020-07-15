import { Reducer } from 'react';
import { SprintGetScore, SprintInitialScore } from './models';
import { ActionType } from './constants';

const initialScore = 0;

const initialState: SprintInitialScore = {
  score: initialScore,
};

const SprintScoreReducer:Reducer<SprintInitialScore, SprintGetScore> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.GET_SCORE:
      return { ...state, score: action.payload };
    default: return state;
  }
};

export default SprintScoreReducer;
