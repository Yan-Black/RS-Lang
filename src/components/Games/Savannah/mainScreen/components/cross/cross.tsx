import * as React from 'react';
import {Component} from 'react';

const cross = {
  width: '20px',
  height: '20px',
  backgroundImage: 'url(src/components/Games/Savannah/mainScreen/components/cross/cross.png)',
  backgroundSize: 'cover',
  position: 'absolute',
  top: '27px',
  right: '27px',
  cursor: 'pointer',
}

class Cross extends Component {
  crossHandler = () => {

  };

  render() {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="cross" onClick={this.crossHandler} style={cross} />
    );
  }
}

export default Cross;
