export interface Card {
  cId: number;
  word: string;
}

export interface RowsMap {
  cards: Card[];
  selected: Card[];
}

export interface Source {
  index: number;
  droppableId: string;
}

export interface Dest {
  droppableId: string;
  index: number;
}

export interface Res {
  base: Card[];
  board: Card[];
}
