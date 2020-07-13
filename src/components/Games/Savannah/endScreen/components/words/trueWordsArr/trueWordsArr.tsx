import * as React from 'react';
import './trueWordsArr.scss';
import { connect } from 'react-redux';
import AppendWord from '../appendWord/appendWord';

const WordsComponent = ({ showWords, trueWords }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  showWords ? trueWords.trueWords.map((word) => <AppendWord word3={word} />) : <div />
);

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
  failedWords: state.failedWords,
  trueWords: state.trueWords,
});

const TrueWordsArr = connect(mapStateToPropsForCounter, null)(WordsComponent);

export default TrueWordsArr;
