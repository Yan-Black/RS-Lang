/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFirstChunk, getLastChunk } from '../../../../containers/Games/EnglishPuzzle/SettingsBlock/actions';
import './index.scss';

const Settings: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);

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
        <p>Level: </p>
        <select name="group" id="group" value={group} onChange={(e) => setGroup(Number(e.target.value))}>
          {groups.map((gr) => (
            <option value={gr} key={gr}>{gr}</option>
          ))}
        </select>
      </div>
      <div className="english-puzzle-settings-page">
        <p>Page: </p>
        <select name="page" id="page" value={page} onChange={(e) => setPage(Number(e.target.value))}>
          {pages.map((pg) => (
            <option value={pg} key={pg}>{pg}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Settings;
