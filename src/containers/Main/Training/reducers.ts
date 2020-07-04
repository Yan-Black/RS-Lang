/* eslint-disable max-len */
import * as Models from 'models';
// import { ActionType } from './constants';
interface SettingsState {
  showWordTranslate: boolean,
  showWordExample: boolean,
  showWordMeaning: boolean,
  showWordTranscription: boolean,
  showWordImage: boolean,
  playAudio: boolean,
  showAllTranslates: boolean,
  showHelpBTN: boolean,
  showDeleteBTN: boolean,
  showDifficultBTN: boolean,
  showIntervalBTNS: boolean,
}

const settingsInitState = <SettingsState> {
  showWordTranslate: true,
  showWordExample: true,
  showWordMeaning: true,
  showWordTranscription: true,
  showWordImage: true,
  playAudio: true,
  showAllTranslates: true,
  showHelpBTN: true,
  showDeleteBTN: true,
  showDifficultBTN: true,
  showIntervalBTNS: true,
};

const settingsReducer: Models.Reducer<unknown> = (state: SettingsState = settingsInitState, { /* type, */ payload }) => {
  switch (payload) {
    case 'showWordTranslate':
      return { ...state, showWordTranslate: !state.showWordTranslate };
    case 'showWordExample':
      return { ...state, showWordExample: !state.showWordExample };
    case 'showWordMeaning':
      return { ...state, showWordMeaning: !state.showWordMeaning };
    case 'showWordTranscription':
      return { ...state, showWordTranscription: !state.showWordTranscription };
    case 'showWordImage':
      return { ...state, showWordImage: !state.showWordImage };
    case 'playAudio':
      return { ...state, playAudio: !state.playAudio };
    case 'showAllTranslates':
      return { ...state, showAllTranslates: !state.showAllTranslates };
    case 'showHelpBTN':
      return { ...state, showHelpBTN: !state.showHelpBTN };
    case 'showDeleteBTN':
      return { ...state, showDeleteBTN: !state.showDeleteBTN };
    case 'showDifficultBTN':
      return { ...state, showDifficultBTN: !state.showDifficultBTN };
    case 'showIntervalBTNS':
      return { ...state, showIntervalBTNS: !state.showIntervalBTNS };
    default:
      return settingsInitState;
  }
};

export { settingsReducer };
