import * as React from 'react';
import { Component } from 'react';
import './indicator.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Indicator extends Component {
  render() {
    return (
      <div className="indicator">
        <div className="movingImg" />
        <div className="pulsate-css" />
      </div>
    );
  }
}

export default Indicator;
