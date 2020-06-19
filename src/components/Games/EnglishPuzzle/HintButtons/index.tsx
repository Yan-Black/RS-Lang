import * as React from 'react';
import Speaker from './Speaker';
import Hint from './Hint';
import Audio from './Audio';
import Image from './Image';
import './index.scss';

const HintsButtons: React.FunctionComponent = () => (
  <div className="hints-buttons">
    <Speaker />
    <Hint />
    <Audio />
    <Image />
  </div>
);

export default HintsButtons;
