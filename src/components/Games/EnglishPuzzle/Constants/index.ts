/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Card, Source, Dest, Res, RowsMap,
} from 'components/Games/EnglishPuzzle/GameBlock/types';
import { InitialStateWords } from 'containers/Games/EnglishPuzzle/SettingsBlock/wordsReducer';

export const reorder = (list: Card[], startIndex: number, endIndex: number): Card[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const move = (
  source: Card[], destination: Card[], droppableSource: Source, droppableDestination: Dest,
): Res => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result as Res;
};

export const wordsExtractor = (
  arr: InitialStateWords, idx: number,
): [RowsMap, number] => {
  const regex = /<[^>]*>/g;
  const currentSentence = arr[idx].textExample.replace(regex, '');
  const wordsArr = currentSentence.split(' ');
  const baseList: Card[] = [];
  const boardList: Card[] = [];
  for (let i = 0; i < wordsArr.length; i++) {
    baseList.push({
      cId: Number((Math.random() * 100).toFixed(2)),
      word: wordsArr[i],
    });
  }
  const rowsMap: RowsMap = {
    cards: boardList,
    selected: baseList,
  };
  const { length } = wordsArr;
  const gameData: [RowsMap, number] = [rowsMap, length];
  return gameData;
};

export const translateExtractor = (
  arr: InitialStateWords, idx: number,
): string => arr[idx].textExampleTranslate;

export const shuffle = (arr: Card[]): Card[] => {
  let newPos: number;
  let temp: Card;
  const shuffledArr = Array.from(arr);
  for (let i = 0; i < shuffledArr.length; i++) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = shuffledArr[i];
    shuffledArr[i] = shuffledArr[newPos];
    shuffledArr[newPos] = temp;
  }
  return shuffledArr;
};
