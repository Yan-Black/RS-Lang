import * as React from 'react';
import DontKnowBtn from './DontKnowBut';
import CheckBtn from './CheckBut';
import ContinueBtn from './ContinueBut';
import ResultsBtn from './ResultsBut';
import StatisticBtn from './StatisticBut';
import '../index.scss';
import { Card } from '../../GameBlock/types';

interface Props {
  onClickFn: () => void;
  wordsToApply: Card[];
  wordsToCheck: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

const HelpButtons: React.FC<Props> = ({
  onClickFn, wordsToApply, setCheckedStateToCards, wordsToCheck, setDragging,
}) => (
  <div className="help-buttons">
    <DontKnowBtn
      onClickFn={onClickFn}
      length={wordsToApply.length}
      setDragging={setDragging}
      setCheckedStateToCards={setCheckedStateToCards}
    />
    <CheckBtn
      setCheckedStateToCards={setCheckedStateToCards}
      wordsToApply={wordsToApply}
      wordsToCheck={wordsToCheck}
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

export default HelpButtons;
