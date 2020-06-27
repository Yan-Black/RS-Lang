/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';

const GroupItem = ({ className, item, fn }) => (
  <span className={className} onClick={fn}>{item}</span>
);

export default GroupItem;
