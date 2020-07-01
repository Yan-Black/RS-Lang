import { Action } from 'redux';
import { InitialStateResultsPage } from '../../Models';

const initialState = <InitialStateResultsPage> {
  isOpen: false,
};

const openResultsReducer = (state = initialState, action: Action): InitialStateResultsPage => {
  switch (action.type) {
    case 'OPEN_RESULTS': return { ...state, isOpen: true };
    case 'CLOSE_RESULTS': return { ...state, isOpen: false };
    default: return state;
  }
};

export default openResultsReducer;
