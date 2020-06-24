interface InitialState {
  page: number;
}

interface Action {
  type: string;
  payload: number;
}

const initialState = <InitialState> {
  page: 1,
};

const pageReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return { ...state, page: action.payload };
    default: return state;
  }
};

export default pageReducer;
