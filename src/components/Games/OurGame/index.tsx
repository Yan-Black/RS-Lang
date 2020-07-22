import * as React from 'react';
import StartPage from './startPage/startPage';
import HangMan from './Hangman';

function OurGame(): JSX.Element {
  return (
    <div>
      <HangMan />
      <StartPage />
    </div>
  );
}

export default OurGame;
