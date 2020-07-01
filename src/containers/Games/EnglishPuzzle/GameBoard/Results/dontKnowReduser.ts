import { InitialStateFailed, ActionResults } from '../../Models';

const initialState = <InitialStateFailed> {
  failed: [],
};

const dontKnowReducer = (state = initialState, action: ActionResults): InitialStateFailed => {
  switch (action.type) {
    case 'ADD_FAILED': return { ...state, failed: state.failed.concat(action.payload) };
    case 'CLEAR_FAILED': return { ...state, failed: [] };
    default: return state;
  }
};

export default dontKnowReducer;
