const initialState = {
  error: false,
};

const errorReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'TOGGLE_ERROR':
      return { ...state, error: !state.error };
    default: return state;
  }
};

export default errorReducer;
