import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/Main/Training/actions';

const Repeat: React.FC = () => {
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do  back word to current repeating words
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span>&gt; 10 мин</span>
      <button
        type="button"
        id="repeat-btn"
        onClick={btnClickHandler}
      >
        Снова
      </button>
    </div>
  );
};

export default Repeat;
