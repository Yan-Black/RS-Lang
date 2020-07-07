import { ActionAuth } from './models';
import { ActionType } from './constants';

export const setUserToken = (token: string): ActionAuth => ({
  type: ActionType.SET_TOKEN,
  payload: token,
});

export const setUserRefreshToken = (refreshToken: string): ActionAuth => ({
  type: ActionType.SET_REFRESH_TOKEN,
  payload: refreshToken,
});

export const removeUserToken = (): ActionAuth => ({
  type: ActionType.REMOVE_TOKEN,
});
