import update from 'immutability-helper';
import { Reducer } from 'react';
import { ActionType } from 'containers/TrainingCard/constants';
import wordsData from 'constants/words-constants';
import { IntialStateUserWords, ActionUserWords } from '../TrainingCard/models';

const initialState: IntialStateUserWords = {
  userWords: wordsData[0].slice(0, 20),
};

const userWordsReducer: Reducer<IntialStateUserWords, ActionUserWords> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_WORDS:
      return update(state, { userWords: { $set: action.payload } });
    default: return state;
  }
};

export default userWordsReducer;
