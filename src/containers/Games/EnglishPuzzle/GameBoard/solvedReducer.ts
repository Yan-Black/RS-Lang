import { Action } from 'redux';
import { InitialStateIsSolved } from '../Models';

const initialState = <InitialStateIsSolved>{
  solved: false,
};

const solvedReducer = (state = initialState, action: Action): InitialStateIsSolved => {
  switch (action.type) {
    case 'SOLVED': return { ...state, solved: true };
    case 'NEW_GAME': return { ...state, solved: false };
    default: return state;
  }
};

export default solvedReducer;
