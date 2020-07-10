import * as React from 'react';
import './errors.scss';
import { useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Errors = ({ count }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return <div className="error-str">{`ОШИБОК: ${count}`}</div>;
  }
  return <div />;
};

export default Errors;
