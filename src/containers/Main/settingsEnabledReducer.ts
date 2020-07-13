import { Reducer } from 'react';
import { InitialStateHintsState, ActionSettings, InitialStateHintsEnabled } from './models';
import { ActionType } from './constants';

const initialHintsState: InitialStateHintsState = {
  translate: true,
  wordMeaning: true,
  example: true,
  showAnswer: true,
  deleteWord: true,
  difficultWord: true,
};

if (!localStorage.getItem('savedSettings')) {
  localStorage.setItem('savedSettings', JSON.stringify(initialHintsState));
}

const initialState: InitialStateHintsEnabled = {
  hintsState: JSON.parse(localStorage.getItem('savedSettings')),
};

const settingsEnabledReducer: Reducer<InitialStateHintsEnabled, ActionSettings> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_SETTINGS: return {
      ...state, hintsState: action.payload,
    };
    default: return state;
  }
};

export default settingsEnabledReducer;
