import * as React from 'react';
import GameBoard from '../GameBoard';
import HintsBlock from '../HintsBlock';
import './index.scss';

const GameBlock: React.FunctionComponent = () => (
  <div className="english-puzzle-game-block">
    <HintsBlock />
    <GameBoard />
  </div>
);

export default GameBlock;
