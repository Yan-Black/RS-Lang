import { Action } from 'models';
import { ACTIVE_WORD } from './types';

interface InitialState {
  activeWord: number;
}

const initialState = {
  activeWord: null,
};

const cardsReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ACTIVE_WORD:
      return { ...state, activeWord: action.payload };
    default: return state;
  }
};

export default cardsReducer;
