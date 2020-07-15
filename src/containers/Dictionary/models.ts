import * as Models from 'models';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface DifficultToLearning extends Models.Action<Payload.SetDocumentTypes> { }
  export interface DeletedToLearning extends Models.Action<Payload.SetDocumentTypes> { }
  export interface DifficultToDeleted extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToLearning extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToDifficult extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToDeleted extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type DifficultToLearning = (
    payload: FetchedWordData[]) => Action.DifficultToLearning;
  export type DifficultToDeleted = (
    payload: FetchedWordData[]) => Action.DifficultToDeleted;
  export type DeletedToLearning = (
    payload: FetchedWordData[]) => Action.DeletedToLearning;
  export type AddToLearning = (
    payload: FetchedWordData[]) => Action.AddToLearning;
  export type AddToDifficult = (
    payload: FetchedWordData[]) => Action.AddToDifficult;
  export type AddToDeleted = (
    payload: FetchedWordData[]) => Action.AddToDeleted;
}

export interface WordObj {
  audio: string,
  audioExample: string,
  audioMeaning: string,
  group: number,
  id: string,
  image: string,
  page: number,
  textExample: string,
  textExampleTranslate: string,
  textMeaning: string,
  textMeaningTranslate: string,
  transcription: string,
  word: string,
  wordTranslate: string,
  wordsPerExampleSentence: number,
  translateOptions?: string[],
}

export interface DictionaryState {
  learningWords: Array<WordObj>,
  difficultWords: Array<WordObj>,
  deletedWords: Array<WordObj>,
}
