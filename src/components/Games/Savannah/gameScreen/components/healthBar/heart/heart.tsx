import * as React from 'react';
import { Component } from 'react';
import './heart.scss';

class Heart extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    heartClass: 'heart',
  };

  fail = () => {
    const { heartClass } = this.state;
    this.setState({
      heartClass: heartClass === 'heart' ? 'heart-dead' : 'heart',
    });
  };

  render() {
    const { heartClass } = this.state;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className={heartClass} onClick={this.fail} />
    );
  }
}

export default Heart;
