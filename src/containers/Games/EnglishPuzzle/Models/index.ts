import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';

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

export interface InitialStateFailed {
  failed: string[];
}

export interface InitialStateSuccess {
  success: string[];
}

export interface InitialStateResultsPage {
  isOpen: boolean;
}

export interface ActionResults {
  type: string;
  payload?: string;
}
