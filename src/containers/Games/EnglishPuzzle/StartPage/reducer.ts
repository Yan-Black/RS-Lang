import { Action } from 'redux';

interface InitialState {
  currentIdx: number;
}

const initialState = <InitialState>{
  currentIdx: 0,
};

const maxIdx = 10;

const activeIndexReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, currentIdx: state.currentIdx + 1 };
    case 'SET_TO_INITIAL': return { ...state, currentIdx: state.currentIdx - maxIdx };
    default: return state;
  }
};

export default activeIndexReducer;
