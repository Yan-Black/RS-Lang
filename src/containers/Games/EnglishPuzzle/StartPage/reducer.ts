const initialState = {
  currentIdx: 0,
};

const maxIdx = 9;

const activeIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, currentIdx: state.currentIdx + 1 };
    case 'SET_TO_INITIAL': return { ...state, currentIdx: state.currentIdx - maxIdx };
    default: return state;
  }
};

export default activeIndexReducer;
