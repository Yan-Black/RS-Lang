import { Reducer } from 'react';
import { Action } from 'redux';
import { SprintGameModeStatus } from './models';
import { ActionType } from './constants';

const initialState: SprintGameModeStatus = {
  isGameMode: false,
};

const sprintGameModeReducer:Reducer<SprintGameModeStatus, Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.START_GAME_MODE: return { ...state, isGameMode: true };
    case ActionType.STOP_GAME_MODE: return { ...state, isGameMode: false };
    default: return state;
  }
};

export default sprintGameModeReducer;
