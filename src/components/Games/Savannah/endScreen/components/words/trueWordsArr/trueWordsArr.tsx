import * as React from 'react';
import { Component } from 'react';
import './trueWordsArr.scss';
import { connect } from 'react-redux';
import AppendWord from '../appendWord/appendWord';

class WordsComponent extends Component {
  componentDidMount(): void {
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { showWords, trueWords } = this.props;
    if (showWords) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      return trueWords.trueWords.map((word) => <AppendWord word3={word} />);
    }
    return <div />;
  }
}

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
  failedWords: state.failedWords,
  trueWords: state.trueWords,
});

const TrueWordsArr = connect(mapStateToPropsForCounter, null)(WordsComponent);

export default TrueWordsArr;
