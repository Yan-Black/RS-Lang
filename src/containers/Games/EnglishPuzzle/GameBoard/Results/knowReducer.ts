import { InitialStateSuccess, ActionResults } from '../../Models';

const initialState = <InitialStateSuccess> {
  success: [],
};

const knowReducer = (state = initialState, action: ActionResults): InitialStateSuccess => {
  switch (action.type) {
    case 'ADD_SUCCESS': return { ...state, success: state.success.concat(action.payload) };
    case 'CLEAR_SUCCESS': return { ...state, success: [] };
    default: return state;
  }
};

export default knowReducer;
