import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/Main/Training/actions';

const Easy: React.FC = () => {
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do  increase time to next repeating
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span>1.5 мес  </span>
      <button
        type="button"
        id="easy-btn"
        onClick={btnClickHandler}
      >
        Легко
      </button>
    </div>
  );
};

export default Easy;
