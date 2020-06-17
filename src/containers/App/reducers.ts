const initialState = 'INIT_APP';

function appReducer(state = initialState, { type }) {
  switch (type) {
    case 'INIT_APP':
      return state;
    default:
      return state;
  }
}

export default appReducer;
