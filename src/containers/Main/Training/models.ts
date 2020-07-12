import * as Models from 'models';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/Models';

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
  export interface ToggleTrainingStatistic extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToFailedTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToSuccessTraining extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddRowOfSuccess extends Models.Action<Payload.SetDocumentTypes> { }
  export interface ResetTrainingStatistic extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type ChangeSetting = (payload: boolean) => Action.ChangeSetting;
  export type ToggleAnswerChecked = () => Action.ToggleAnswerChecked;
  export type ToggleAnswerCorrect = () => Action.ToggleAnswerCorrect;
  export type ProgressTraining = () => Action.ProgressTraining;
  export type SetInputWord = (payload: string) => Action.SetInputWord;
  export type ToggleMoveToNext = () => Action.ToggleMoveToNext;
  export type ResetTraining = () => Action.ResetTraining;
  export type ToggleTrainingStatistic = (isOpen: boolean) => Action.ToggleTrainingStatistic;
  export type AddToFailedTraining = (wordObj: FetchedWordData) => Action.AddToFailedTraining;
  export type AddToSuccessTraining = (wordObj: FetchedWordData) => Action.AddToSuccessTraining;
  export type AddRowOfSuccess = (success: number) => Action.AddRowOfSuccess;
  export type ResetTrainingStatistic = () => Action.ResetTrainingStatistic;
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

export interface TrainingStatistic {
  isTrainingStatisticOpen: boolean,
  failedWordsTraining: Array<FetchedWordData>,
  successWordTraining: Array<FetchedWordData>,
  correctAnswersInRow: number,
}
