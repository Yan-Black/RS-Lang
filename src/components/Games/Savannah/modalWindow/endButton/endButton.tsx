import * as React from 'react';
import { Component } from 'react';
import './endButton.scss';

// eslint-disable-next-line react/prefer-stateless-function
class EndButton extends Component {
  // eslint-disable-next-line max-len,@typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <div className="end-button">Закрыть</div>
    );
  }
}

export default EndButton;
