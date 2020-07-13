import * as React from 'react';
import './line.scss';
import { useSelector } from 'react-redux';

const Line: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    return <div className="line" />;
  }
  return <div />;
};

export default Line;
