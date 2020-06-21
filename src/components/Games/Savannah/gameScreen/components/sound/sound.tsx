import * as React from 'react';
import { Component } from 'react';

const sound = {
  width: '23px',
  height: '24px',
  backgroundImage: 'url(src/components/Games/Savannah/gameScreen/components/sound/sound.svg)',
  backgroundPosition: 0,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  cursor: 'pointer',
  position: 'relative',
};

class Sound extends Component {
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
      <div className="sound" onClick={this.soundStateHandler} style={sound} />
    );
  }
}

export default Sound;
