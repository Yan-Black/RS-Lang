import { Reducer } from 'react';
import update from 'immutability-helper';
import { InitialStateAuth, ActionAuth } from './models';
import { ActionType } from './constants';

const initalState: InitialStateAuth = {
  token: '',
  refreshToken: '',
};

const authTokenReducer: Reducer<InitialStateAuth, ActionAuth> = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case ActionType.SET_TOKEN: return update(state, {
      token: { $set: action.payload },
    });
    case ActionType.SET_REFRESH_TOKEN: return update(state, {
      refreshToken: { $set: action.payload },
    });
    case ActionType.REMOVE_TOKEN: return {
      ...state,
      token: '',
      refreshToken: '',
    };
    default: return state;
  }
};

export default authTokenReducer;
