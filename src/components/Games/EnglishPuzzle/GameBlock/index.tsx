import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../models/state';
import GameBoard from '../GameBoard';
import HintsBlock from '../HintsBlock';
import './index.scss';
import { Card, RowsMap } from './types';

const GameBlock: React.FC = () => {
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);

  const wordsExtractor = (arr:[{textExample: string}], idx: number) => {
    const currentSentence = arr[idx].textExample.replace('<b>', '').replace('</b>', '').replace('.', '');
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
    return rowsMap;
  };

  return (
    <div className="english-puzzle-game-block">
      <HintsBlock />
      {actualWordsCollection.length ? (
        <GameBoard wordsMap={wordsExtractor(actualWordsCollection, activeIdx)} />
      ) : (null)}
    </div>
  );
};
export default GameBlock;
