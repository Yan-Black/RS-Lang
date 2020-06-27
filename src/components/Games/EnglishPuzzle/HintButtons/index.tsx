import * as React from 'react';
import Speaker from './Speaker';
import Hint from './Hint';
import Audio from './Audio';
import Image from './Image';
import './index.scss';

interface Props {
  phrase: string;
}

const HintsButtons: React.FunctionComponent<Props> = ({ phrase }) => (
  <div className="hints-buttons">
    <Speaker />
    <Hint />
    <Audio phrase={phrase} />
    <Image />
  </div>
);

export default HintsButtons;
