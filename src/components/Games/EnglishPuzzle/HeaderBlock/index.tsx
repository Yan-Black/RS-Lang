import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import HintButtons from '../HintButtons';
import Settings from '../SettingsBlock';
import './index.scss';

const Header: React.FC = () => {
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  return (
    <div className={isResultsOpen || isStatOpen ? 'header-section disabled' : 'header-section'}>
      <Settings />
      {actualWordsCollection.length ? (
        <HintButtons phrase={actualWordsCollection[activeIdx].textExample} />
      ) : (null)}
    </div>
  );
};

export default Header;
