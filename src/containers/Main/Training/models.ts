import * as Models from 'models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface ChangeSetting extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleAnswerChecked extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleAnswerCorrect extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ProgressTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface SetInputWord extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ToggleMoveToNext extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ResetTraining extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type ChangeSetting = (payload: boolean) => Action.ChangeSetting;
  export type ToggleAnswerChecked = () => Action.ToggleAnswerChecked;
  export type ToggleAnswerCorrect = () => Action.ToggleAnswerCorrect;
  export type ProgressTraining = () => Action.ProgressTraining;
  export type SetInputWord = (payload: string) => Action.SetInputWord;
  export type ToggleMoveToNext = () => Action.ToggleMoveToNext;
  export type ResetTraining = () => Action.ResetTraining;
}

export interface SettingsState {
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

export interface TrainingState {
  currIndex: number | string,
  isChecked: boolean,
  isCorrect: boolean,
  inputWord: string,
  moveToNext: false,
}
