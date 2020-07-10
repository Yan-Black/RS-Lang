import * as React from 'react';
import './defaultInfo.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DefaultInfo = () => (
  <div className="defaultInfo">
    <h1 className="h1Style">Саванна</h1>
    <p className="info">
      {/* eslint-disable-next-line max-len */}
      Тренировка Саванна развивает словарный запас. Чем больше слов ты знаешь, тем больше очков опыта
      получишь.
    </p>
  </div>
);

export default DefaultInfo;
