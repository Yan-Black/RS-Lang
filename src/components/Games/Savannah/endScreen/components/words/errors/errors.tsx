import * as React from 'react';
import './errors.scss';
import { useSelector } from 'react-redux';

const Errors: React.FC<{count: string}> = ({ count }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    return <div className="error-str">{`ОШИБОК: ${count}`}</div>;
  }
  return <div />;
};

export default Errors;
