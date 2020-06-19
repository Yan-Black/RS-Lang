/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import update from 'immutability-helper';

const initialState = {
  currentWords: [],
};

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORDS':
      return update(state, { currentWords: { $set: action.payload } });
    default: return state;
  }
};

export default wordsReducer;
