import { Reducer } from 'react';
import { Action } from 'redux';
import { SprintStatus } from './models';
import { ActionType } from './constants';

const initialState: SprintStatus = {
  isSprint: true,
};

const toggleSprintReducer:Reducer<SprintStatus, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.START_SPRINT: return { ...state, isSprint: true };
    case ActionType.STOP_SPRINT: return { ...state, isSprint: false };
    default: return state;
  }
};

export default toggleSprintReducer;
