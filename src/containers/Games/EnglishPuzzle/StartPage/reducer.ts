import { Action } from 'redux';
import { InitialStateIndex } from '../Models';

const initialState = <InitialStateIndex>{
  currentIdx: 0,
};

const activeIndexReducer = (state = initialState, action: Action): InitialStateIndex => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, currentIdx: state.currentIdx + 1 };
    case 'SET_TO_INITIAL': return { ...state, currentIdx: 0 };
    default: return state;
  }
};

export default activeIndexReducer;
