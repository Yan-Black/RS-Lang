export interface InitialStateModal {
  isOpen: boolean;
}

export interface InitialStateModalInfo {
  modalId: string;
  name: string;
  desc: string;
}

export interface InitialStateTheme {
  theme: string;
}

export interface InitialStateStatOpen {
  isOpen: boolean;
}

export interface InitialStateHintsState {
  showTranscription: boolean;
  showImage: boolean;
  autoPronounce: boolean;
  showTextTranslate: boolean;
  showAnswerBtn: boolean;
  deleteWordBtn: boolean;
  difficultWordBtn: boolean;
  repeatBtn: boolean;
}

export interface InitialStudyState {
  trainAllWords: boolean;
  onlyNew: boolean;
  onlyRepeat: boolean;
  onlyDifficult: boolean;
}

export interface InitialStateStudyMode {
  studyModes: InitialStudyState;
}
export interface InitialStateHintsEnabled {
  hintsState: InitialStateHintsState,
}

export interface InitialAmountState {
  words: number;
  cards: number;
}

export interface InitialStateAmountCW {
  amount: InitialAmountState;
}

export interface InitialStateMainLang {
  lang: string;
}

export interface ActionModalInfo {
  type: string;
  payload?: InitialStateModalInfo;
}

export interface ActionLang {
  type: string;
  payload: string;
}

export interface ActionTheme {
  type: string;
  payload: string;
}

export interface ActionSettings {
  type: string;
  payload: InitialStateHintsState,
}

export interface ActionAmount {
  type: string;
  payload: InitialAmountState,
}

export interface ActionStudy {
  type: string;
  payload: InitialStudyState;
}
