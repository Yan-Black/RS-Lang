/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

const Easy: React.FC = () => (
  <div className="d-flex flex-column">
    <label htmlFor="easy-btn">1.5 мес  </label>
    <button
      type="button"
      id="easy-btn"
    >
      Легко
    </button>
  </div>
);

export default Easy;
