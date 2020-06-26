import * as React from 'react';
import { useDispatch } from 'react-redux';
// import { State } from 'models';
import { lvl, rnd } from 'containers/Games/AudioCall/actions';
import Option from './Option';

interface Options {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[],
  currLvl: string,
  isLevelOption: boolean,
}

function OptionItems({ options, currLvl, isLevelOption }: Options): JSX.Element {
  const dispatch = useDispatch();
  const actionToDispatch = isLevelOption ? lvl : rnd;
  // const page = useSelector((state: State) => state.audioCallPage);
  // const level = useSelector((state: State) => state.audioCallLevel);
  // const round = useSelector((state: State) => state.audioCallRound);

  return (
    <select
      className="custom-select mr-sm-2"
      id="levels"
      defaultValue={currLvl}
      onChange={(event) => {
        dispatch(actionToDispatch(event.currentTarget.value));
      }}
    >
      { options.map((option, ind) => <Option item={+ind + 1} key={+ind + 1} />) }
    </select>
  );
}

export default OptionItems;
