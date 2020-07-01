import * as React from 'react';
import './index.scss';
import ReactPlayer from 'react-player/youtube';

const DemoVideo: React.FC = () => (
  <div className="player-wrapper">
    <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
  </div>
);

export default DemoVideo;
