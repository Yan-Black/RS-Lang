import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';

export interface FetchedWordData {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  wordsPerExampleSentence: number;
}
export interface InitialStateWords {
  currentWords: Array<FetchedWordData>;
}

export interface ActionCard {
  type: string;
  payload?: Card[];
}

export interface ActionOffset {
  type: string;
  payload?: number[];
}

export interface InitialStateOffsetX {
  xOffsets: Array<number[]>;
}

export interface InitialStateHelpBtns {
  dontKnowBtn: boolean,
  checkBtn: boolean,
  continueBtn: boolean,
  resultsBtn: boolean,
  statisticBtn: boolean,
}

export interface InitialStateCardsCollection {
  cardsCollection: Array<Card[]>;
}

export interface InitialStateIsSolved {
  solved: boolean;
}

export interface InitialStateHintBtns {
  audioHintActive: boolean,
  translateHintActive: boolean,
  backgroundHintActive: boolean,
  speakerActive: boolean,
}

export interface ActionWords {
  type: string;
  payload?: Array<FetchedWordData>;
}

export interface ActionPages {
  type: string;
  payload: number;
}

export interface InitialStateGroup {
  group: number;
}

export interface InitialStatePage {
  page: number;
}

export interface InitialStateIndex {
  currentIdx: number;
}

export interface InitialStateLoading {
  isLoading: boolean;
}
