import * as React from 'react';

const startButton = {
  display: 'inline-block',
  cursor: 'pointer',
  appearance: 'none',
  fontSize: '24px',
  fontWeight: 300,
  lineHeight: 1,
  textAlign: 'center',
  padding: '19px 15px 21px',
  textDecoration: 'none!important',
  minWidth: '162px',
  color: '#fff!important',
  background: '#00c49d',
  borderRadius: '4px',

}

const Button = () => (
  <div className="start-button" style={startButton}>Начать</div>
)

export default Button;
