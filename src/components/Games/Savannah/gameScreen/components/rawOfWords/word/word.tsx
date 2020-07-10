import * as React from 'react';
import './word.scss';
import { Component } from 'react';

interface Props {
  word: string,
  className: string,
  onClick: (word: string, e: Event)=>void,
}

export class Word extends Component<Props> {
  onClick = (word, e) => {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions,react/destructuring-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,react/destructuring-assignment,@typescript-eslint/no-unused-expressions
    this.props.onClick && this.props.onClick(word, e);
  };

  render() {
    const { word, className } = this.props;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className={className} onClick={this.onClick.bind(this, word)} data-word={word}>
        {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
        {`1. ${word}`}
      </div>
    );
  }
}

export default Word;
