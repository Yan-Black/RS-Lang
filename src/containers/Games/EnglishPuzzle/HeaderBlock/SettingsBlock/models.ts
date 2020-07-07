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
