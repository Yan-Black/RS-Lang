import * as React from 'react';
import { Component } from 'react';
import './cross.scss';

const CrossComponent = ({ modalWindow, mode }) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  mode !== 'SETENDMODE' ? <div className="cross" onClick={modalWindow} /> : <div />
);

export default CrossComponent;
