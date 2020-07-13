import * as React from 'react';
import Repeat from './Repeat';
import Hard from './Hard';
import Normal from './Normal';
import Easy from './Easy';

const AnkiBtns: React.FC = () => (
  <div className="anki-btns-wrapper">
    <Repeat />
    <Easy />
    <Normal />
    <Hard />
  </div>
);

export default AnkiBtns;
