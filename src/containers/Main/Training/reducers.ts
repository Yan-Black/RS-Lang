import * as Models from 'models';
import { ActionType } from './constants';
import { SettingsState, TrainingState } from './models';

const settingsInitState = <SettingsState> {
  showWordTranslate: true,
  showWordExample: true,
  showWordMeaning: true,
  showWordTranscription: true,
  showWordImage: true,
  playAudio: false,
  showAllTranslates: true,
  showHelpBTN: true,
  showDeleteBTN: true,
  showDifficultBTN: true,
  showIntervalBTNS: true,
};

const trainingInitState = <TrainingState> {
  currIndex: 0,
  isChecked: false,
  isCorrect: false,
  inputWord: '',
  moveToNext: false,
};

const settingsReducer: Models.Reducer<unknown> = (
  state: SettingsState = settingsInitState, { /* type, */ payload },
): SettingsState => {
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

const trainingReducer: Models.Reducer<unknown> = (
  state: TrainingState = trainingInitState, { type, payload },
) => {
  switch (type) {
    case ActionType.TOGGLE_ANSWER_CHECKED:
      return { ...state, isChecked: !state.isChecked };
    case ActionType.TOGGLE_ANSWER_CORRECT:
      return { ...state, isCorrect: !state.isCorrect };
    case ActionType.PROGRESS_TRAINING:
      return {
        ...state,
        currIndex: +state.currIndex + 1,
        inputWord: '',
        isChecked: false,
        isCorrect: false,
        moveToNext: false,
      };
    case ActionType.SET_INPUT_WORD:
      return { ...state, inputWord: payload, isChecked: true };
    case ActionType.TOGGLE_MOVE_TO_NEXT:
      return { ...state, moveToNext: !state.moveToNext };
    case ActionType.RESET_TRAINING:
      return trainingInitState;
    default:
      return state;
  }
};

export { settingsReducer, trainingReducer };
