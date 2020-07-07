import * as React from 'react';
import { HintBtnsProps } from 'components/Games/EnglishPuzzle/models';
import Speaker from './Speaker';
import Hint from './Hint';
import Audio from './Audio';
import Image from './Image';
import './index.scss';

const HintsButtons: React.FC<HintBtnsProps> = ({ phrase }) => (
  <div className="eng-puzzle-hints-buttons">
    <Speaker />
    <Hint />
    <Audio phrase={phrase} />
    <Image />
  </div>
);

export default HintsButtons;
