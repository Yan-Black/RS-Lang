import { Action } from 'redux';
import { SHOW_LOADER, HIDE_LOADER } from './types';

export const showLoader = (): Action => ({
  type: SHOW_LOADER,
});

export const hideLoader = (): Action => ({
  type: HIDE_LOADER,
});
