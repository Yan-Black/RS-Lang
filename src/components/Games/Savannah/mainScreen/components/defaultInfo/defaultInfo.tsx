import * as React from 'react';
//import './defaultInfo.scss';

const defaultInfo = {
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 300,
  color: '/*#fff*/black',
};

const h1Style = {
  fontSize: '40px',
  fontWeight: 300,
  lineHeight: 1,
  marginBottom: '60px',
  color: '#6cffde',
  opacity: '.8',
  textTransform: 'uppercase',
  letterSpacing: '13px',
};

const info = {
  maxWidth: '565px',
  margin: '0 auto 58px',
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 300,
  //color: '#fff',
  opacity: '.8',
}

const DefaultInfo = () => (
  <div className="defaultInfo" style={defaultInfo}>
    <h1 style={h1Style}>Саванна</h1>
    <p className="info" style={info}>
      {/* eslint-disable-next-line max-len */}
      Тренировка Саванна развивает словарный запас. Чем больше слов ты знаешь, тем больше очков опыта
      получишь.
    </p>
  </div>
);

export default DefaultInfo;
