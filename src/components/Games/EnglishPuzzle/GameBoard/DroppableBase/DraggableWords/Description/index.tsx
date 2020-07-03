import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import '../index.scss';
import { DescProps } from '../../../Models';

const Description: React.FC<DescProps> = ({ description }) => {
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  return (
    <div className={isSolved && !isResultsOpen && !isStatOpen ? 'description' : 'description description-disabled'}>
      {description}
    </div>
  );
};
export default Description;
