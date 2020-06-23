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
}

const HelpButtons: React.FC<Props> = ({ onClickFn, wordsToApply }) => (
  <div className="help-buttons">
    <DontKnowBtn onClickFn={onClickFn} />
    <CheckBtn />
    <ContinueBtn wordsToApply={wordsToApply} />
    <ResultsBtn />
    <StatisticBtn />
  </div>
);

export default HelpButtons;
