import * as React from 'react';
import './trueWords.scss';
import { useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TrueWords = ({ count }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return <div className="true-str">{`ПРАВИЛЬНО: ${count}`}</div>;
  }
  return <div />;
};

export default TrueWords;
