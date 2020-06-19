import * as React from 'react';
import HintButtons from '../HintButtons';
import Settings from '../SettingsBlock';
import './index.scss';

const Header: React.FunctionComponent = () => (
  <div className="header-section">
    <Settings />
    <HintButtons />
  </div>
);

export default Header;
