/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import './index.scss';

function ShowImage() {
  return (
    <div className="img-wrapper">
      <img src="http://languagenow.co.uk/wp-content/uploads/2016/05/languagenow_english.jpg" alt="image" className="card-img" />
      <p className="translation" />
    </div>
  );
}

export default ShowImage;
