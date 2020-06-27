/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFirstChunk, getLastChunk, updatePage, updateGrop,
} from 'containers/Games/EnglishPuzzle/SettingsBlock/actions';
import './index.scss';
import { State } from 'models';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const group = useSelector((state: State) => state.engPuzzleGroup.group);
  const page = useSelector((state: State) => state.engPuzzlePage.page);
  const changePageHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updatePage(Number(event.target.value)));
  };

  const changeGroupHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateGrop(Number(event.target.value)));
  };

  useEffect(() => {
    page % 2 || page === 0
      ? dispatch(
        getFirstChunk(
          Math.floor((page > 0 ? page - 1 : page) / 2),
          group > 0 ? group - 1 : group,
        ),
      )
      : dispatch(
        getLastChunk(
          Math.floor((page > 0 ? page - 1 : page) / 2),
          group > 0 ? group - 1 : group,
        ),
      );
  }, [group, page]);

  const pages = [];
  const groups = [1, 2, 3, 4, 5, 6];
  for (let i = 1; i <= 60; i += 1) {
    pages.push(i);
  }

  return (
    <div className="english-puzzle-settings">
      <div className="english-puzzle-settings-group">
        <div>Level: </div>
        <select name="group" id="group" value={group} onChange={changeGroupHandler}>
          {groups.map((gr) => (
            <option value={gr} key={gr}>{gr}</option>
          ))}
        </select>
      </div>
      <div className="english-puzzle-settings-page">
        <div>Page: </div>
        <select name="page" id="page" value={page} onChange={changePageHandler}>
          {pages.map((pg) => (
            <option value={pg} key={pg}>{pg}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Settings;
