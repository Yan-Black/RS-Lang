import * as React from 'react';
import './loadingImg.scss';

const LoadingImg: React.FC = () => (
  <div className="cssload-loader">
    <div className="cssload-inner cssload-one" />
    <div className="cssload-inner cssload-two" />
    <div className="cssload-inner cssload-three" />
  </div>
);

export default LoadingImg;
