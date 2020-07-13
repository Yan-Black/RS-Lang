import * as React from 'react';
import './showWords.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showWords } from 'containers/Games/Savannah/actions';

class ShowWordsComponent extends Component {
  onClickHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { showWord } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    showWord();
  };

  render() {
    // eslint-disable-next-line no-shadow,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-shadow
    const { showWords } = this.props;
    if (!showWords) {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      return <div className="show-words" onClick={this.onClickHandler}>{'Show me stats>>'}</div>;
    } return <div />;
  }
}

const mapDispatchToPropsForButton = (dispatch) => ({
  showWord: () => {
    showWords(dispatch);
  },
});

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
});

// eslint-disable-next-line max-len
const ShowWords = connect(mapStateToPropsForCounter, mapDispatchToPropsForButton)(ShowWordsComponent);

export default ShowWords;
