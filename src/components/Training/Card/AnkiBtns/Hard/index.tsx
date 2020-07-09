import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/Main/Training/actions';

const Hard: React.FC = () => {
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do double decrease time to next repeating
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span>4 дня</span>
      <button
        type="button"
        id="hard-btn"
        onClick={btnClickHandler}
      >
        Трудно
      </button>
    </div>
  );
};

export default Hard;
