import * as React from 'react';
import './index.scss';

function LevelControl() {
  return (
    <div className="level-wrapper">
      <span className="level active-level" data-level="1">1</span>
      <span className="level" data-level="2">2</span>
      <span className="level" data-level="3">3</span>
      <span className="level" data-level="4">4</span>
      <span className="level" data-level="5">5</span>
      <span className="level" data-level="6">6</span>
    </div>
  );
}

export default LevelControl;
