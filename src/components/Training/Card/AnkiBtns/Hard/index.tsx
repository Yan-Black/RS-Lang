/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

const Hard: React.FC = () => (
  <div className="d-flex flex-column">
    <label htmlFor="hard-btn">4 дня</label>
    <button
      type="button"
      id="hard-btn"
    >
      Трудно
    </button>
  </div>
);

export default Hard;
