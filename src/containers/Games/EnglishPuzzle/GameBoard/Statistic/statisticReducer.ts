import { Action } from 'redux';
import { InitialStateStatisticPage } from '../../Models';

const initialState = <InitialStateStatisticPage> {
  statOpen: false,
};

const statisticReducer = (state = initialState, action: Action): InitialStateStatisticPage => {
  switch (action.type) {
    case 'OPEN_STATISTIC': return { ...state, statOpen: true };
    case 'CLOSE_STATISTIC': return { ...state, statOpen: false };
    default: return state;
  }
};

export default statisticReducer;
