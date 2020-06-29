import update from 'immutability-helper';
import { InitialStateWords, ActionWords } from '../Models';

const initialState = <InitialStateWords>{
  currentWords: [],
};

const wordsReducer = (state = initialState, action: ActionWords): InitialStateWords => {
  switch (action.type) {
    case 'FETCH_WORDS':
      return update(state, { currentWords: { $set: action.payload } });
    default: return state;
  }
};

export default wordsReducer;
