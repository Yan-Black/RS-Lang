import * as React from 'react';
import './loadingImg.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LoadingImg = () => (
  <div className="cssload-loader">
    <div className="cssload-inner cssload-one" />
    <div className="cssload-inner cssload-two" />
    <div className="cssload-inner cssload-three" />
  </div>
);

export default LoadingImg;
