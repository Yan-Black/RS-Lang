import * as React from 'react';
import { Button } from 'react-bootstrap';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../models/state';
import ResultItem from '../Result-item';
import { resetGame, resultGame, stopGame } from '../../../../containers/Games/SpeakIt/ControlButtons/actions';
import { resetStatistics } from '../../../../containers/Games/SpeakIt/FetchGroup/actions';

const Result = (): JSX.Element => {
  const dispatch = useDispatch();
  const statistics = useSelector((state: State) => state.speakItFetch.statistics);
  const error = statistics.filter((el) => el.win === false).map((el) => (
    <ResultItem
      audio={el.audio}
      key={`error${el.word}`}
      className="error-item"
      word={el.word}
      transcription={el.transcription}
      wordTranslate={el.wordTranslate}
    />
  ));
  const success = statistics.filter((el) => el.win === true).map((el) => (
    <ResultItem
      key={`success${el.word}`}
      className="success-item"
      audio={el.audio}
      word={el.word}
      transcription={el.transcription}
      wordTranslate={el.wordTranslate}
    />
  ));

  const startNewGame = () => {
    dispatch(stopGame());
    dispatch(resetGame());
    dispatch(resetStatistics());
    dispatch(resultGame(false));
  };

  const returnGame = () => {
    dispatch(resultGame(false));
  };

  return (
    <div className="result">
      <div className="result-container">
        <p className="error">
          Error:
          {error.length}
        </p>
        {error}
        <p className="success">
          Success:
          {success.length}
        </p>
        {success}
        <div className="btn-block">
          <Button variant="warning" className="btn return-btn" onClick={returnGame}>Return</Button>
          <Button variant="success" className="btn new-game-btn" onClick={startNewGame}>New Game</Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
