import { UPDATE_GROUP } from './types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateGroup = (num: number) => ({
  type: UPDATE_GROUP,
  payload: num,
});
