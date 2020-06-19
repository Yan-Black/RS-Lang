import * as React from 'react';
import StartWords from '../StartWords';
import './index.scss';

const GameBoard: React.FunctionComponent = () => {
  const rowsAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div
        className="game-board"
        id="board-1"
      >
        <div className="string-numbers">
          {rowsAmount.map((number) => (
            <div key={`row-${number}`} className="string-number">{number}</div>
          ))}
        </div>
        <div className="canvas cover">
          {rowsAmount.map((number) => (
            <div key={`row-${number}`} className="sentence" />
          ))}
        </div>
      </div>
      <StartWords />
    </>
  );
};
export default GameBoard;
