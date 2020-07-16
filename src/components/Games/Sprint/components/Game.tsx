import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getScore } from 'containers/Games/Sprint/actions';
// import { State } from 'models';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faCheckCircle,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import { GetWordObjectFromData, shuffleArray } from './functions';
import book1 from '../../../../constants/words-constants';
import error from '../assets/audio/error.mp3';
import correct from '../assets/audio/correct.mp3';
import './sass/sprint.scss';

const words = book1[0].slice(0, 100);

function Game(): JSX.Element {
  // const stateScore = useSelector((state: State) => state.sprintScore.score);
  const dispatch = useDispatch();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [subLevel, setSubLevel] = useState(0);
  const [currentWordObject, setCurrentWordObject] = useState(words.pop());
  const [currentWord, setCurrentWord] = useState(currentWordObject.word);
  const [currentTranslate, setCurrentTranslate] = useState(currentWordObject.wordTranslate);
  const audioSucces = new Audio(correct);
  const audioFail = new Audio(error);

  const levelPlus1 = 10;
  const levelPlus2 = 20;
  const levelPlus3 = 30;
  const levelPlus4 = 40;

  async function playSuccesAudio(): Promise<void> {
    await audioSucces.play();
  }
  async function playFailAudio(): Promise<void> {
    await audioFail.play();
  }

  const resetLevel = () => {
    setLevel(1);
    setSubLevel(0);
  };

  const increaseLevel = () => {
    if (level < 4) {
      setLevel(level + 1);
    }
  };

  const increaseSubLevel = () => {
    if (subLevel === 3 && level < 4) {
      setSubLevel(0);
      increaseLevel();
    } else {
      setSubLevel(subLevel + 1);
    }
  };

  const rightAnswerHandler = () => {
    // eslint-disable-next-line no-void
    void playSuccesAudio();

    if (level === 1) {
      setScore(score + levelPlus1);
      increaseSubLevel();
      dispatch(getScore(score));
    }
    if (level === 2) {
      setScore(score + levelPlus2);
      increaseSubLevel();
      dispatch(getScore(score));
    }
    if (level === 3) {
      setScore(score + levelPlus3);
      increaseSubLevel();
      dispatch(getScore(score));
    }
    if (level === 4) {
      setScore(score + levelPlus4);
      increaseSubLevel();
      dispatch(getScore(score));
    }
  };

  const wrongAnswerHandler = () => {
    // eslint-disable-next-line no-void
    void playFailAudio();
    resetLevel();
  };

  const SprintHandler = () => {
    if (currentTranslate === currentWordObject.wordTranslate) {
      rightAnswerHandler();
    } else {
      wrongAnswerHandler();
    }

    setCurrentWordObject(words.pop());
  };

  const keyPressHandler = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      SprintHandler();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, []);

  useEffect(() => {
    const trans = shuffleArray([currentWordObject.wordTranslate, GetWordObjectFromData(words)]);
    setCurrentWord(currentWordObject.word);
    setCurrentTranslate(trans[0]);
    // const curTranslate = GetWordObjectFromData(translates);
    // console.log(translates);
    // setCurrentWord(currentWordObject.word);
    // setCurrentTranslate(curTranslate);
  }, [currentWordObject]);

  return (
    <div>
      <div className="score">{score}</div>
      <div className="game-container">
        <div className="game-header">
          <div className="actual-level">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={subLevel > 0 ? 'sublevel-indication success-indication' : 'sublevel-indication'}
            />
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={subLevel > 1 ? 'sublevel-indication success-indication' : 'sublevel-indication'}
            />
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={subLevel > 2 ? 'sublevel-indication success-indication' : 'sublevel-indication'}
            />
          </div>
          <div className="level-info">
            Level
            {' '}
            {level}
            : +
            {level}
            0
            points for the correct answer
          </div>
        </div>
        <div className="game-field">
          <span className="actual-word">{currentWord}</span>
          <FontAwesomeIcon
            icon={faEquals}
          />
          <span className="actual-translation">{currentTranslate}</span>
          <div className="indication">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="lg"
            />
          </div>
          <div className="buttons-container">
            <div className="right-button">
              <Button
                variant="success"
                onClick={SprintHandler}
              >
                Right
              </Button>
              <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                size="lg"
              />
            </div>
            <div className="wrong-button">
              <Button
                variant="danger"
                onClick={SprintHandler}
              >
                Wrong
              </Button>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Game;
