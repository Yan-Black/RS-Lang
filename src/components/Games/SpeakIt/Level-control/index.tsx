/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './index.scss';
import { State } from 'models';
import { updateGroup } from '../../../../containers/Games/SpeakIt/ControlLevel/actions';
import GroupItem from '../GroupItem';

const LevelControl = () : JSX.Element => {
  const groups = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();
  const activeControl = useSelector((state: State) => state.speakItControl.group);

  return (
    <div className="level-wrapper">
      {groups.map((el) => (
        <GroupItem
          key={el}
          fn={() => dispatch(updateGroup(el))}
          className={classNames('level', { 'active-level': el === activeControl })}
          item={el}
        />
      ))}
    </div>
  );
};

export default LevelControl;
