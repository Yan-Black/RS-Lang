import * as React from 'react';
import './index.scss';
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {
  nextCard,
  resetGame,
  startGame,
  stopGame
} from "../../../../containers/Games/SpeakIt/ControlButtons/actions";
import {State} from "../../../../models/state";
import {mistake, win} from "../../../../containers/Games/SpeakIt/FetchGroup/actions";

function Control() {
  const dispatch = useDispatch();
  const game = useSelector((state: State) => state.speakItButtons.startGame);
  const gameWord = useSelector((state: State) => state.speakItButtons.gameWord);

  const start = () => {
    dispatch(startGame());
  }
  const stop = () => {
    dispatch(stopGame());
    dispatch(resetGame());
  }
  const next = () => {
    dispatch(nextCard());
    dispatch(mistake(gameWord));
  }


  return (
    <div className="btn-wrapper">
      <Button variant="danger" className="btn" onClick={stop}>Stop</Button>
      <Button variant="success" className="btn" onClick={game ? next : start}>{game ? 'Next' : 'Start'}</Button>
      <Button variant="info" className="btn">Result</Button>
    </div>
  );
}

export default Control;
