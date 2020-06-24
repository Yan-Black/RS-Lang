import * as React from 'react';
import HintButtons from '../HintButtons';
import Settings from '../SettingsBlock';
import './index.scss';

const Header: React.FC = () => (
  <div className="header-section">
    <Settings />
    <HintButtons />
  </div>
);

export default Header;
