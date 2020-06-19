import { AUDIO_ENABLE, AUDIO_DISABLE, TRANSLATE_ENABLE, TRANSLATE_DISABLE, BACKGROUND_ENABLE, BACKGROUND_DISABLE } from './types';

export const audioEnabled = () => ({
  type: AUDIO_ENABLE,
});

export const audioDisabled = () => ({
  type: AUDIO_DISABLE,
});

export const translateEnable = () => ({
  type: TRANSLATE_ENABLE,
});

export const translateDisable = () => ({
  type: TRANSLATE_DISABLE,
});

export const backgroundEnable = () => ({
  type: BACKGROUND_ENABLE,
});

export const backgroundDisable = () => ({
  type: BACKGROUND_DISABLE,
});
