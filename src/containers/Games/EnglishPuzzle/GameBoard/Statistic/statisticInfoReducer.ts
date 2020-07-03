import { InitialStateStatisticInfo } from '../../Models';

const initialState = <InitialStateStatisticInfo> {
  playedDates: [],
  playedTimes: [],
  playedLevels: [],
  failed: [],
  success: [],
};

const statisticInfoReducer = (state = initialState, action): InitialStateStatisticInfo => {
  switch (action.type) {
    case 'UPDATE_DATE': return { ...state, playedDates: state.playedDates.concat(action.payload) };
    case 'UPDATE_TIME': return { ...state, playedTimes: state.playedTimes.concat(action.payload) };
    case 'UPDATE_LEVELS': return { ...state, playedLevels: state.playedLevels.concat(action.payload) };
    case 'UPDATE_FAILED': return { ...state, failed: state.failed.concat(action.payload) };
    case 'UPDATE_SUCCESS': return { ...state, success: state.success.concat(action.payload) };
    default: return state;
  }
};

export default statisticInfoReducer;
