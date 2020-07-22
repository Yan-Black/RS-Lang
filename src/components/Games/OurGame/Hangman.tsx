import * as React from 'react';
import { Component } from 'react';
import './Hangman.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/named
import { Word, Question } from './Words';
import { randNum } from './randWord';

import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';

// eslint-disable-next-line @typescript-eslint/ban-types
class HangMan extends Component<{}, any> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: Word(),
      maxMistakes: 6,
      question: Question(),
    };
  }

  getInnerText = (text: string) => {
    const textField = [];
    text.split(' ').map((el) => {
      if (el.match(/<[a-z][a-z0-9]*>/gi)) textField.push('[ ...]');
      else textField.push(el);
      return el;
    });
    return textField.join(' ');
  };

  handleGuess = (e) => {
    const letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      mistake: st.answer.includes(letter) ? st.mistake : st.mistake + 1,
    }));
  };

  // eslint-disable-next-line react/sort-comp
  guessedWord() {
    return this.state.answer.split('').map((letter) => (this.state.guessed.has(letter) ? letter : ' _ '));
  }

  generateButtons() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
      // eslint-disable-next-line react/button-has-type
      <button
        className="btn btn-lg btn-primary m-2"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    randNum();
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: Word(),
      question: Question(),
    });
  };

  render() {
    const gameOver = this.state.mistake >= this.state.maxMistakes;
    const isWinner = this.guessedWord().join('') === this.state.answer;
    let gameStat: any[] = this.generateButtons();

    if (isWinner) {
      // @ts-ignore
      gameStat = <h1>Great Job! Next word</h1>;
    }

    if (gameOver) {
      // @ts-ignore
      gameStat = <h1>You Lost. Try another one!</h1>;
    }

    return (
      <div className="hangman-container">
        <div className="hangman-content">
          <h1 className="hangman-game-name">Hangman</h1>
          <div className="hangman-guess">
            <div className="hangman-guess-link">
              <Link to="/">
                <button
                  type="button"
                  className="hangman-guess-hint-button"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </Link>
            </div>
            <div className="hangman-level">
              <div className="hangman-level-choice">
                <button
                  type="button"
                  className="hangman-level-item"
                  onClick={() => {
                    localStorage.setItem('hangman-level', '0');
                    this.resetButton();
                  }}
                >
                  {' '}
                  Beginner
                </button>
                <button
                  type="button"
                  className="hangman-level-item"
                  onClick={() => {
                    localStorage.setItem('hangman-level', '1');
                    this.resetButton();
                  }}
                >
                  {' '}
                  Elementary
                </button>
                <button
                  type="button"
                  className="hangman-level-item"
                  onClick={() => {
                    localStorage.setItem('hangman-level', '2');
                    this.resetButton();
                  }}
                >
                  {' '}
                  Intermediate
                </button>
                <button
                  type="button"
                  className="hangman-level-item"
                  onClick={() => {
                    localStorage.setItem('hangman-level', '3');
                    this.resetButton();
                  }}
                >
                  {' '}
                  Upper-Intermediate
                </button>
                <button
                  type="button"
                  className="hangman-level-item"
                  onClick={() => {
                    localStorage.setItem('hangman-level', '4');
                    this.resetButton();
                  }}
                >
                  {' '}
                  Advanced
                </button>
                <button
                  type="button"
                  className="hangman-level-item"
                  onClick={() => {
                    localStorage.setItem('hangman-level', '5');
                    this.resetButton();
                  }}
                >
                  {' '}
                  Proficiency
                </button>
              </div>
            </div>
            <div className="hangman-guess-text">
              Wrong Guesses:
              {' '}
              {this.state.mistake}
              {' '}
              of
              {' '}
              {this.state.maxMistakes}
            </div>
          </div>
          <div className="hangman-image">
            <img src={HangMan.defaultProps.images[this.state.mistake]} alt="" />
          </div>
          <div className="hangman-question">
            <p>
              {this.state.question.includes(this.state.answer)
                ? this.state.question.replace(this.state.answer, ' ...')
                : this.getInnerText(this.state.question)}
            </p>
            <p>
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <div className="hangman-keyboard-container">
              <p className="hangman-keyboard">{gameStat}</p>
            </div>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className="btn btn-info" onClick={this.resetButton}>Next Word</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HangMan;
