import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { stopGameMode } from 'containers/Games/Sprint/actions';
// import { useState } from 'react';
import './sass/sprint.scss';
// import { AnyAction } from 'redux';
// import Countdown from 'react-countdown';

function Timer(): JSX.Element {
  const [counter, setCounter] = useState(60);
  const dispatch = useDispatch();

  const stopPlaying = () => {
    setTimeout(() => dispatch(stopGameMode()), 1000);
  };

  const countdown = () => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter === 0) stopPlaying();
  };

  useEffect(() => {
    countdown();
  }, [counter]);

  return (
    <div className="timer-container">{counter}</div>
  );
}

export default Timer;
