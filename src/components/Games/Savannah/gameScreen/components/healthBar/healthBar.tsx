import * as React from 'react';
import { Component } from 'react';
import Heart from './heart/heart';
import './healthBar.scss';

// eslint-disable-next-line react/prefer-stateless-function
class HealthBar extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <div className="healthBar">
        <Heart />
        <Heart />
        <Heart />
        <Heart />
        <Heart />
      </div>
    );
  }
}

export default HealthBar;
