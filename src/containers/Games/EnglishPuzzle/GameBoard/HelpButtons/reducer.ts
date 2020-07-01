import { Action } from 'redux';
import { InitialStateHelpBtns } from '../../Models';

const initialState = <InitialStateHelpBtns> {
  dontKnowBtn: true,
  checkBtn: false,
  continueBtn: false,
  resultsBtn: false,
  statisticBtn: false,
};

const helpBtnsReducer = (state = initialState, action: Action): InitialStateHelpBtns => {
  switch (action.type) {
    case 'ENABLE_DONT_KNOW_BTN': return {
      ...state,
      dontKnowBtn: true,
      continueBtn: false,
      checkBtn: false,
      resultsBtn: false,
      statisticBtn: false,
    };
    case 'DISABLE_DONT_KNOW_BTN': return {
      ...state,
      dontKnowBtn: false,
    };
    case 'ENABLE_CHECK_BTN': return {
      ...state,
      dontKnowBtn: false,
      checkBtn: true,
    };
    case 'DISABLE_CHECK_BTN': return {
      ...state,
      dontKnowBtn: true,
      checkBtn: false,
    };
    case 'ENABLE_CONTINUE_BTN': return {
      ...state,
      dontKnowBtn: false,
      checkBtn: false,
      continueBtn: true,
    };
    case 'DISABLE_CONTINUE_BTN': return {
      ...state,
      dontKnowBtn: true,
      statisticBtn: false,
    };
    case 'ENABLE_RESULTS_BTN': return {
      ...state,
      dontKnowBtn: false,
      continueBtn: true,
      resultsBtn: true,
    };
    case 'DISABLE_RESULTS_BTN': return {
      ...state,
      resultsBtn: false,
    };
    case 'ENABLE_STATISTIC_BTN': return {
      ...state,
      statisticBtn: true,
      resultsBtn: false,
    };
    case 'DISABLE_STATISTIC_BTN': return {
      ...state,
      statisticBtn: false,
    };
    default: return state;
  }
};

export default helpBtnsReducer;
