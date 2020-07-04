import { ActionType } from './constants';
import { ActionCreator } from './models';

export const changeSetting: ActionCreator.ChangeSetting = (setting: boolean) => ({
  type: ActionType.CHANGE_SETTING,
  payload: setting,
});
