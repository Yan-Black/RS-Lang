import * as Models from 'models';

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface StartPage extends Models.Action<Payload.SetDocumentTypes> { }
  export interface GamePage extends Models.Action<Payload.SetDocumentTypes> { }
  export interface StatisticPage extends Models.Action<Payload.SetDocumentTypes> { }
  export interface Lvl extends Models.Action<Payload.SetDocumentTypes> { }
  export interface Rnd extends Models.Action<Payload.SetDocumentTypes> { }
  export interface InitWords extends Models.Action<Payload.SetDocumentTypes> { }
  export interface FetchWords extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type StartPage = () => Action.StartPage;
  export type GamePage = () => Action.GamePage;
  export type StatisticPage = () => Action.GamePage;
  export type Lvl = (level: string) => Action.Lvl;
  export type Rnd = (round: string) => Action.Rnd;
  export type InitWords = () => Action.InitWords;
  export type FetchWords = (wordsObj: unknown) => Action.FetchWords;
}
