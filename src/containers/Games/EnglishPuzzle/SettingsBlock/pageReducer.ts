import { InitialStatePage, ActionPages } from '../Models';

const initialState = <InitialStatePage> {
  page: 1,
};

const pageReducer = (state = initialState, action: ActionPages): InitialStatePage => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return { ...state, page: action.payload };
    default: return state;
  }
};

export default pageReducer;
