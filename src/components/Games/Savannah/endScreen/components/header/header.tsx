import * as React from 'react';
import './header.scss';
import { Component } from 'react';

interface Props {
  word: string,
}

// eslint-disable-next-line react/prefer-stateless-function
class HeaderComponent extends Component<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { word } = this.props;
    return <div className="header">{word}</div>;
  }
}

export default HeaderComponent;
