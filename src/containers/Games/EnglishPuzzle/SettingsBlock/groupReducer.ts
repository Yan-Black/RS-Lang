import { InitialStateGroup, ActionPages } from '../Models';

const initialState = <InitialStateGroup> {
  group: 1,
};

const groupReducer = (state = initialState, action: ActionPages): InitialStateGroup => {
  switch (action.type) {
    case 'UPDATE_GROUP':
      return { ...state, group: action.payload };
    default: return state;
  }
};

export default groupReducer;
