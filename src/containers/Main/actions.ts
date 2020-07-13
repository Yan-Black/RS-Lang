import { Action } from 'redux';
import { ActionType } from './constants';
import {
  ActionModalInfo, InitialStateModalInfo, ActionTheme, ActionSettings, ActionStudy,
} from './models';

export const openModal = (): Action => ({
  type: ActionType.OPEN_MODAL,
});

export const closeModal = (): Action => ({
  type: ActionType.CLOSE_MODAL,
});

export const setModalInfo = (info: InitialStateModalInfo): ActionModalInfo => ({
  type: ActionType.SET_INFO,
  payload: info,
});

export const setTheme = (theme: string): ActionTheme => ({
  type: ActionType.SET_THEME,
  payload: theme,
});

export const handleSettings = (val: boolean) => ({
  type: ActionType.HANDLE_SETTINGS,
  payload: val,
});

export const updateSettings = (obj: any): ActionSettings => ({
  type: ActionType.UPDATE_SETTINGS,
  payload: obj,
});

export const updateAmount = (obj: any) => ({
  type: ActionType.UPDATE_AMOUNT,
  payload: obj,
});

export const changeAppLang = (lang: string) => ({
  type: ActionType.CHANGE_LANG,
  payload: lang,
});

export const updateStudySettings = (obj: any): ActionStudy => ({
  type: ActionType.UPDATE_STUDY_SETTINGS,
  payload: obj,
});
