import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import DontKnowBtn from './DontKnowBut';
import CheckBtn from './CheckBut';
import ContinueBtn from './ContinueBut';
import ResultsBtn from './ResultsBut';
import StatisticBtn from './StatisticBut';
import '../index.scss';
import { ButtonsProps } from '../Models';

const HelpButtons: React.FC<ButtonsProps> = ({
  onClickFn, wordsToApply, setCheckedStateToCards,
  wordsToCheck, setDragging, phrase,
}) => {
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  return (
    <div className={isResultsOpen ? 'help-buttons disabled' : 'help-buttons'}>
      <DontKnowBtn
        onClickFn={onClickFn}
        length={wordsToApply.length}
        setDragging={setDragging}
        setCheckedStateToCards={setCheckedStateToCards}
        phrase={phrase}
      />
      <CheckBtn
        setCheckedStateToCards={setCheckedStateToCards}
        setDragging={setDragging}
        wordsToApply={wordsToApply}
        wordsToCheck={wordsToCheck}
        phrase={phrase}
      />
      <ContinueBtn
        wordsToApply={wordsToApply}
        setDragging={setDragging}
        setCheckedStateToCards={setCheckedStateToCards}
      />
      <ResultsBtn />
      <StatisticBtn />
    </div>
  );
};
export default HelpButtons;
