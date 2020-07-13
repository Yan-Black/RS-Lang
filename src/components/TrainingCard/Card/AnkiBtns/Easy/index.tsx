import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';

const Easy: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
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
      <span className="text-center">1.5 m  </span>
      <button
        className="btn btn-success"
        type="button"
        id="easy-btn"
        onClick={btnClickHandler}
      >
        {usedLang.buttons.easyBTN}
      </button>
    </div>
  );
};

export default Easy;
