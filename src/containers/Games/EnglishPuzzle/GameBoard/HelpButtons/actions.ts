import { Action } from 'redux';
import {
  ENABLE_DONT_KNOW_BTN,
  DISABLE_DONT_KNOW_BTN,
  ENABLE_CHECK_BTN,
  DISABLE_CHECK_BTN,
  ENABLE_CONTINUE_BTN,
  DISABLE_CONTINUE_BTN,
  ENABLE_RESULTS_BTN,
  DISABLE_RESULTS_BTN,
  ENABLE_STATISTIC_BTN,
  DISABLE_STATISTIC_BTN,
} from './types';

export const enableDontKnowBtn = (): Action => ({
  type: ENABLE_DONT_KNOW_BTN,
});

export const disableDontKnowBtn = (): Action => ({
  type: DISABLE_DONT_KNOW_BTN,
});

export const enableCheckBtn = (): Action => ({
  type: ENABLE_CHECK_BTN,
});

export const disableCheckBtn = (): Action => ({
  type: DISABLE_CHECK_BTN,
});

export const enableContinueBtn = (): Action => ({
  type: ENABLE_CONTINUE_BTN,
});

export const disableContinueBtn = (): Action => ({
  type: DISABLE_CONTINUE_BTN,
});

export const enableResultsBtn = (): Action => ({
  type: ENABLE_RESULTS_BTN,
});

export const disableResultsBtn = (): Action => ({
  type: DISABLE_RESULTS_BTN,
});

export const enableStatisticBtn = (): Action => ({
  type: ENABLE_STATISTIC_BTN,
});

export const disableStatisticBtn = (): Action => ({
  type: DISABLE_STATISTIC_BTN,
});
