import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import HintButtons from '../HintButtons';
import Settings from '../SettingsBlock';
import './index.scss';

const Header: React.FC = () => {
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  return (
    <div className="header-section">
      <Settings />
      {actualWordsCollection.length ? (
        <HintButtons phrase={actualWordsCollection[activeIdx].textExample} />
      ) : (null)}
    </div>
  );
};

export default Header;
