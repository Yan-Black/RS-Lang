import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import GameBoard from '../GameBoard';
import HintsBlock from '../HintsBlock';
import { wordsExtractor } from '../Constants';
import './index.scss';

const GameBlock: React.FC = () => {
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  return (
    <div className="english-puzzle-game-block">
      <HintsBlock />
      {actualWordsCollection.length ? (
        <GameBoard gameData={wordsExtractor(actualWordsCollection, activeIdx)} />
      ) : (null)}
    </div>
  );
};
export default GameBlock;
