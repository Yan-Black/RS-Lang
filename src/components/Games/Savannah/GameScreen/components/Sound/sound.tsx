import * as React from 'react';
import { Component } from 'react';
import './sound.scss';

const Sound = () => (
  <div className="sound" />
);

/* class Sound extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    soundState: 'ON',
  };

  soundStateHandler = () => {
    const { soundState } = this.state;
    this.setState({
      soundState: soundState === 'ON' ? 'OFF' : 'ON',
    });
  };

  render() {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="sound" onClick={this.soundStateHandler} />
    );
  }
} */

export default Sound;
