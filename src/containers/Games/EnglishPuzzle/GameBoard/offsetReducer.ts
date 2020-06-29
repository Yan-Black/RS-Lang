import { ActionOffset, InitialStateOffsetX } from '../Models';

const initialState = <InitialStateOffsetX>{
  xOffsets: [],
};

const offsetXReducer = (state = initialState, action: ActionOffset): InitialStateOffsetX => {
  switch (action.type) {
    case 'UPDATE_OFFSET':
      return { ...state, xOffsets: state.xOffsets.concat([action.payload]) };
    case 'REMOVE_OFFSET':
      return { ...state, xOffsets: [] };
    default: return state;
  }
};

export default offsetXReducer;
