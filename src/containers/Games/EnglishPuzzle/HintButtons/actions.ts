import {
  AUDIO_ENABLE,
  AUDIO_DISABLE,
  TRANSLATE_ENABLE,
  TRANSLATE_DISABLE,
  BACKGROUND_ENABLE,
  BACKGROUND_DISABLE } from './types';
import { Action } from '../../../../models/redux/Action';

export const audioEnabled = (): Action => ({
  type: AUDIO_ENABLE,
});

export const audioDisabled = (): Action => ({
  type: AUDIO_DISABLE,
});

export const translateEnable = (): Action => ({
  type: TRANSLATE_ENABLE,
});

export const translateDisable = (): Action => ({
  type: TRANSLATE_DISABLE,
});

export const backgroundEnable = (): Action => ({
  type: BACKGROUND_ENABLE,
});

export const backgroundDisable = (): Action => ({
  type: BACKGROUND_DISABLE,
});
