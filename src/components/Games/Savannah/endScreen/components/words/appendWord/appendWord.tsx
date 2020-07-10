import * as React from 'react';
import Speaker from './speaker/speaker';
import Translation from './translation/translation';
import './appendWord.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AppendWord = ({ word3 }) => (
  <div className="append-word">
    <Speaker />
    <Translation word3={word3} />
  </div>
);

export default AppendWord;
