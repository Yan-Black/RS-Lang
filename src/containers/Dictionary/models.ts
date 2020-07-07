import * as Models from 'models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface DifficultToLearning extends Models.Action<Payload.SetDocumentTypes> { }
  export interface DeletedToLearning extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToLearning extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToDifficult extends Models.Action<Payload.SetDocumentTypes> { }
  export interface AddToDeleted extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type DifficultToLearning = (
    payload: Array<WordObj>) => Action.DifficultToLearning;
  export type DeletedToLearning = (
    payload: Array<WordObj>) => Action.DeletedToLearning;
  export type AddToLearning = (
    payload: Array<WordObj>) => Action.AddToLearning;
  export type AddToDifficult = (
    payload: Array<WordObj>) => Action.AddToDifficult;
  export type AddToDeleted = (
    payload: Array<WordObj>) => Action.AddToDeleted;
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
