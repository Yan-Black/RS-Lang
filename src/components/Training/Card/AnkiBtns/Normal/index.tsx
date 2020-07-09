import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/Main/Training/actions';

const Normal: React.FC = () => {
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do  stay time to next repeating without changes
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span>18 дней</span>
      <button
        type="button"
        id="normal-btn"
        onClick={btnClickHandler}
      >
        Помню
      </button>
    </div>
  );
};

export default Normal;
