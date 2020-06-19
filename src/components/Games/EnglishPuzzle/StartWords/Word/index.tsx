import * as React from 'react';
import '../index.scss';

interface Props {
  word:string
}

const Word: React.FunctionComponent<Props> = ({ word }) => (
  <div className="start-word">
    {word}
  </div>
);

export default Word;
