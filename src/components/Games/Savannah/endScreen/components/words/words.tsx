import * as React from 'react';
import { Component } from 'react';
import './words.scss';
import { connect } from 'react-redux';
import AppendWord from './appendWord/appendWord';

class WordsComponent extends Component {
  componentDidMount(): void {
  }

  i = 0;

  // eslint-disable-next-line no-plusplus
  kavo = () => (this.i++);

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { showWords, failedWords } = this.props;
    if (showWords) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,max-len
      return failedWords.failedWords.map((word) => <AppendWord word3={word} key={this.kavo()} />);
    }
    return <div />;
  }
}

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
  failedWords: state.failedWords,
});

const Words = connect(mapStateToPropsForCounter, null)(WordsComponent);

export default Words;
