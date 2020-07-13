import * as React from 'react';
import './words.scss';
import { connect } from 'react-redux';
import AppendWord from './appendWord/appendWord';

const WordsComponent = ({ showWords, failedWords }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,max-len
  showWords ? failedWords.failedWords.map((word) => <AppendWord word3={word} key={word} />) : <div />
);

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
  failedWords: state.failedWords,
});

const Words = connect(mapStateToPropsForCounter, null)(WordsComponent);

export default Words;
