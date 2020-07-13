import * as React from 'react';
import './cross.scss';

const CrossComponent = ({ modalWindow, mode }) => (
  mode !== 'SETENDMODE' ? <div className="cross" onClick={modalWindow} /> : <div />
);

export default CrossComponent;
