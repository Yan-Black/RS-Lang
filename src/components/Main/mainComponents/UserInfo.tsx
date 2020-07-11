import * as React from 'react';

const UserInfo: React.FC = () => (
  <div className="main-stat">
    <div>
      <p id="learned-words">Learned new words: 0</p>
    </div>
    <div>
      <p id="played-games">Games you played: 0</p>
    </div>
    <div>
      <p id="rights-words">Right words in a row: 0</p>
    </div>
    <div>
      <p id="correct-repeats">Correct Repeats: 0</p>
    </div>
  </div>
);

export default UserInfo;
