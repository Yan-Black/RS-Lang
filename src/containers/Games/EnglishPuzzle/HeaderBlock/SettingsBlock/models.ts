export interface FetchedWordData {
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
  id: number;
  played?: boolean;
  time?: string;
  date?: string;
  lastTimeRepeat?: string;
  repeatTimes?: number;
  nextRepeat?: string;
  difficult?: boolean;
  deleted?: boolean;
  success?: number;
}

export interface ActionWords {
  type: string;
  payload?: Array<FetchedWordData>;
}

export interface ActionGroupsPages {
  type: string;
  payload: number;
}

export interface InitialStateGroup {
  group: number;
}

export interface InitialStatePage {
  page: number;
}

export interface InitialStateWords {
  currentWords: Array<FetchedWordData>;
}
