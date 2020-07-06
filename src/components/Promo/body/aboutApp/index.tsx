import * as React from 'react';
import './index.scss';
import DemoVideo from './aboutVideo';

import DescriptionTabsContainer from './aboutDescription';

interface Props {
  aboutGames
}

const AboutApp: React.FC<Props> = (aboutGames) => (
  <div>
    <DemoVideo videoLink={aboutGames.aboutGames.promoVideoHref} />
    <DescriptionTabsContainer tabsInfo={aboutGames.aboutGames.gameTabs} />
  </div>

);

export default AboutApp;
