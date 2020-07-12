import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { eng, ru } from 'constants/main-page-constants';

const UserInfo: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  useEffect(() => (lang === 'eng' ? setUsedLang(eng) : setUsedLang(ru)), [lang]);
  return (
    <div className="main-stat">
      <div>
        <p>{usedLang.userProgress.learned}</p>
      </div>
      <div>
        <p>{usedLang.userProgress.played}</p>
      </div>
      <div>
        <p>{usedLang.userProgress.rightInARow}</p>
      </div>
      <div>
        <p>{usedLang.userProgress.correctRepeats}</p>
      </div>
    </div>
  );
};
export default UserInfo;
