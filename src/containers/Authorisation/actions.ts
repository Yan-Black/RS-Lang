import { ActionAuth, ActionUserName } from './models';
import { ActionType } from './constants';

export const setNewUser = (userId: string): ActionAuth => ({
  type: ActionType.SET_NEW_USER,
  payload: userId,
});

export const setLogged = (): ActionAuth => ({
  type: ActionType.SET_LOGGED,
});

export const setUnLogged = (): ActionAuth => ({
  type: ActionType.SET_UNLOGGED,
});

export const setUserRefreshToken = (refreshToken: string): ActionAuth => ({
  type: ActionType.SET_REFRESH_TOKEN,
  payload: refreshToken,
});

export const removeUserToken = (): ActionAuth => ({
  type: ActionType.REMOVE_TOKEN,
});

export const addApiError = (mes: string): ActionAuth => ({
  type: ActionType.ADD_API_ERROR_MESSAGE,
  payload: mes,
});

export const removeApiError = (): ActionAuth => ({
  type: ActionType.REMOVE_API_ERROR_MESSAGE,
  payload: '',
});

export const setUserName = (name: string): ActionUserName => ({
  type: ActionType.SET_USER_NAME,
  payload: name,
});

export const openRegForm = () => ({
  type: ActionType.OPEN_REG_FORM,
});

export const closeRegForm = () => ({
  type: ActionType.CLOSE_REG_FORM,
});

export const openLogForm = () => ({
  type: ActionType.OPEN_LOG_FORM,
});

export const closeLogForm = () => ({
  type: ActionType.CLOSE_LOG_FORM,
});

export const updateVisits = () => ({
  type: ActionType.UPDATE_VISITS,
});
