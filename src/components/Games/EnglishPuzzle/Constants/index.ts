import {
  Card, Source, Dest, Res, RowsMap,
} from 'components/Games/EnglishPuzzle/GameBlock/types';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { InitialStateWords } from 'containers/Games/EnglishPuzzle/Models';

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
  const currentSentence: string = arr[idx].textExample;
  const wordsArr = currentSentence.replace(regex, '').split(' ');
  const baseList: Card[] = [];
  const boardList: Card[] = [];
  const offsetsX = countXOffsets(wordsArr.length);
  for (let i = 0; i < wordsArr.length; i++) {
    baseList.push({
      cId: Number((Math.random() * 100).toFixed(2)),
      word: wordsArr[i],
      xOffset: offsetsX[i],
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

export const pronounceAudio = (
  audioState: boolean, sntc: string, dispatch: Dispatch<Action>,
  speakerEnable:() => Action, speakerDisable:() => Action,
): void => {
  if (audioState) {
    const regex = /<[^>]*>/g;
    const phrase = sntc.replace(regex, '');
    const sentence = new SpeechSynthesisUtterance();
    const { speechSynthesis } = window;
    sentence.lang = 'en-EN';
    sentence.text = phrase;
    sentence.onstart = () => dispatch(speakerEnable());
    sentence.onend = () => dispatch(speakerDisable());
    speechSynthesis.speak(sentence);
    if (!audioState) speechSynthesis.cancel();
  }
};

export const countXOffsets = (length: number): number[] => {
  const offsetsX = [];
  const step = 972.8 / length;
  let cardOffset = 0;
  for (let i = 0; i <= length; i++) {
    offsetsX.push(Number(cardOffset.toFixed(0)));
    cardOffset += step;
  }
  return offsetsX;
};
