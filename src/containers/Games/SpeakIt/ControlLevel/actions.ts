import { UPDATE_GROUP } from './types';

export const updateGroup = (num: number) => ({
  type: UPDATE_GROUP,
  payload: num,
});
