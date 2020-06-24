import { Action } from 'redux';
import { SHOW_LOADER, HIDE_LOADER } from './types';

interface InitialState {
  isLoading: boolean;
}

const initialState = <InitialState> {
  isLoading: false,
};

const loaderReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default: return state;
  }
};

export default loaderReducer;
