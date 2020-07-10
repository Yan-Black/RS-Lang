import * as React from 'react';
import './result.scss';
import { Component } from 'react';
import { connect } from 'react-redux';

interface Props {
  firstNum: string,
  secondNum: string,
}

// eslint-disable-next-line react/prefer-stateless-function
class ResultComponent extends Component<Props> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { showWords, firstNum, secondNum } = this.props;
    if (!showWords) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return <div className="result">{`${firstNum} слов изучено, ${secondNum} на изучении`}</div>;
    }
    return <div />;
  }
}

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
});

const Result = connect(mapStateToPropsForCounter, null)(ResultComponent);

export default Result;
