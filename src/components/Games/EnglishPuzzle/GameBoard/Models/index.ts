import { RowsMap, Card } from '../../GameBlock/types';

export interface DroppableProps {
  rowLength: number;
  words: RowsMap;
  onClickFn: React.MouseEventHandler;
  cssStyle: string[];
  drag: boolean;
  back: string;
  description: string;
}

export interface ButtonsProps {
  onClickFn: () => void;
  wordsToApply: Card[];
  wordsToCheck: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  phrase: Card[];
  learningWord: string
}

export interface WordProps {
  onClickFn: React.MouseEventHandler;
  word: string;
  cId: number;
  idx: number;
  id: number;
  cssStyle: string;
  drag: boolean;
  back: string;
  offsetX: number;
}

export interface BoardProps {
  gameData: [RowsMap, number, string];
  background: string;
  description: string;
}

export interface DontKnowBtnProps {
  onClickFn: () => void;
  length: number;
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  phrase: Card[];
  learningWord: string;
}

export interface ContinueBtnProps {
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CheckBtnProps {
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  wordsToApply: Card[];
  wordsToCheck: Card[];
  phrase: Card[];
  learningWord: string;
}

export interface DescProps {
  description: string;
}

export interface ResultsProps {
  back: string;
  description: string;
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StatisticProps {
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}
