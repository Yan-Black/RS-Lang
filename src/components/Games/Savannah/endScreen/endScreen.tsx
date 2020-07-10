import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header/header';
import Result from './components/result/result';
import StartNewGame from './components/startNewGame/startNewGame';
import BackToTraining from './components/backToTraining/backToTraining';
import './endScreen.scss';
import ShowWords from './components/showWords/showWords';
import Words from './components/words/words';
import Errors from './components/words/errors/errors';
import Line from './components/words/line/line';
import TrueWords from './components/words/trueWords/trueWords';
import TrueWordsArr from './components/words/trueWordsArr/trueWordsArr';

// eslint-disable-next-line react/prefer-stateless-function
class EndScreenComponent extends Component {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { mode, failedWords, trueWords } = this.props;
    if (mode === 'SETENDMODE') {
      return (
        <div className="end-screen">
          <Header word="В этот раз не получилось, но продолжай тренироваться!" />
          <Result firstNum="1" secondNum="2" />
          <div className="words-window">
            <Errors count={failedWords.failedWords.length} />
            <Words />
            <Line />
            <TrueWords count={trueWords.trueWords.length} />
            <TrueWordsArr />
          </div>
          <ShowWords />
          <StartNewGame />
          <BackToTraining />
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
  failedWords: state.failedWords,
  trueWords: state.trueWords,
});

const EndScreen = connect(mapStateToPropsForCounter, null)(EndScreenComponent);

export default EndScreen;
