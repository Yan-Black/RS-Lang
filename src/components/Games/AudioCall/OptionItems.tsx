import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { lvl } from 'containers/Games/AudioCall/actions';
import Option from './Option';

interface Options {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[],
}

function OptionItems({ options }: Options): JSX.Element {
  const dispatch = useDispatch();
  // const page = useSelector((state: State) => state.audioCallPage);
  const level = useSelector((state: State) => state.audioCallLevel);
  // const round = useSelector((state: State) => state.audioCallRound);

  return (
    <select
      className="custom-select mr-sm-2"
      id="levels"
      defaultValue={level}
      onChange={(event) => {
        dispatch(lvl(event.currentTarget.value));
      }}
    >
      { options.map((option, ind) => <Option item={+ind + 1} key={+ind + 1} />) }
    </select>
  );
}

export default OptionItems;
