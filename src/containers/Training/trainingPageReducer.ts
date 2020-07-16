const initialState = {
  trainingOpen: false,
};

const trainingPageReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'OPEN_TRAINING':
      return { ...state, trainingOpen: true };
    case 'CLOSE_TRAINING':
      return { ...state, trainingOpen: false };
    default: return state;
  }
};

export default trainingPageReducer;
