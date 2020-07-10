import * as React from 'react';
import './startNewGame.scss';

const reload = () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const StartNewGame = () => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  <div className="new-game-btn" onClick={reload}>Продолжить тренировку</div>
);

export default StartNewGame;
