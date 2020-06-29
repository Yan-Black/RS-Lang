import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import '../index.scss';
import { DescProps } from '../../../Models';

const Description: React.FC<DescProps> = ({ description }) => {
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  return (
    <div className={isSolved ? 'description' : '  description description-disabled'}>
      {description}
    </div>
  );
};
export default Description;
