import * as React from 'react';
import { useState } from 'react';
import './index.scss';

const StartPage: React.FC = () => {
  const [active, setActive] = useState('block');
  const [style, setStyle] = useState('start-page');
  const removeStartPage = () => {
    setStyle('start-page hide-start-page');
    setTimeout(() => {
      setActive('none');
    }, 700);
  };
  return (
    <div className={style} style={{ display: `${active}` }}>
      <div className="guide">
        <div className="app-info">
          <h1 className="appName">English Bricks</h1>
          <p className="app-describe">Click on words, collect phrases.</p>
          <p className="app-describe">Words can be drag and drop. Select tooltips in the menu.</p>
        </div>
        <button
          type="button"
          className="help-button"
          onClick={removeStartPage}
        >
          START
        </button>
      </div>
    </div>
  );
};
export default StartPage;
