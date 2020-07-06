import * as React from 'react';
import './index.scss';
import DevCard from './card';

interface Props {
  devCardSInfo
}

const CardContainer: React.FC<Props> = (devCards) => (
  <div className="card-container">
    <DevCard cardInfo={devCards.devCardSInfo.artemDrushchyts} />
    <DevCard cardInfo={devCards.devCardSInfo.lactivka} />
    <DevCard cardInfo={devCards.devCardSInfo.paxom4ik4} />
    <DevCard cardInfo={devCards.devCardSInfo.zzh0c} />
    <DevCard cardInfo={devCards.devCardSInfo.yanBlack} />
    <DevCard cardInfo={devCards.devCardSInfo.oksanaHulyaeva} />
    <DevCard cardInfo={devCards.devCardSInfo.ilichka} />
  </div>

);

export default CardContainer;
