import { Action } from 'redux';
import {
  AUDIO_ENABLE,
  AUDIO_DISABLE,
  TRANSLATE_ENABLE,
  TRANSLATE_DISABLE,
  BACKGROUND_ENABLE,
  BACKGROUND_DISABLE,
  SPEAKER_ENABLE,
  SPEAKER_DISABLE,
  SET_TO_USER_PREFERENCIES,
} from './types';

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

export const speakerEnable = (): Action => ({
  type: SPEAKER_ENABLE,
});

export const speakerDisable = (): Action => ({
  type: SPEAKER_DISABLE,
});

export const setToUserPreferencies = (): Action => ({
  type: SET_TO_USER_PREFERENCIES,
})
