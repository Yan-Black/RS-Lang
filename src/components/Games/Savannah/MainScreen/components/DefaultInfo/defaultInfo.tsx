import * as React from 'react';
import './defaultInfo.scss';

const DefaultInfo: React.FC = () => (
  <div className="defaultInfo">
    <h1 className="h1Style">Саванна</h1>
    <p className="info">
      Тренировка Саванна развивает словарный запас.
      Чем больше слов ты знаешь,
      тем больше очков опыта
      получишь.
    </p>
  </div>
);

export default DefaultInfo;
