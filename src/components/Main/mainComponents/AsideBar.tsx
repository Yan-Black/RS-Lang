import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from 'models';
import {
  faVideo,
  faBook,
  faUsers,
  faAngleRight,
  faAngleLeft,
  faUserCircle,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setUnLogged } from 'containers/Authorisation/actions';
import { createUserStatistic } from 'constants/athorization-constants';
import MainSection from './MainSection';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const statInfo = useSelector((state: State) => state.engPuzzleStatisticInfo);
  const [isOpen, setAsideOpen] = useState(false);
  const handleAsideMenu = () => setAsideOpen(!isOpen);
  const closeAsideMenu = () => setAsideOpen(false);
  const { userName } = localStorage;
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    dispatch(setUnLogged());
    createUserStatistic({ leaernedWords: 0, options: { stat: statInfo } });
  };
  const pages = [
    {
      page: 'Statistic', icon: faChartBar,
    }, {
      page: 'Dictionary', icon: faBook,
    }, {
      page: 'Promo', icon: faUsers,
    }, {
      page: 'About Us', icon: faVideo,
    },
  ];
  return (
    <>
      <div id="header" className={isOpen ? 'header open' : 'header'}>
        <ul className="header-nav">
          {pages.map((pageData) => (
            <li key={pageData.page}>
              <Link to={`/${pageData.page}`} onClick={closeAsideMenu}>
                <button
                  type="button"
                  className="main-aside-btn"
                >
                  <FontAwesomeIcon icon={pageData.icon} />
                  <span
                    id="statistic"
                    className={
                      isOpen
                        ? 'aside-menu-tooltip aside-tooltip-visible'
                        : 'aside-menu-tooltip'
                    }
                  >
                    {pageData.page}
                  </span>
                </button>
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="main-aside-btn"
              onClick={handleAsideMenu}
            >
              {isOpen
                ? <FontAwesomeIcon icon={faAngleLeft} />
                : <FontAwesomeIcon icon={faAngleRight} />}
            </button>
          </li>
        </ul>
        <div className="profile">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="aside-logout"
            style={{
              fontSize: '40px',
              cursor: 'pointer',
            }}
            onClick={logout}
          />
        </div>
        <span className="sign" id="sign">{userName}</span>
      </div>
      <MainSection />
    </>
  );
};

export default Navigation;
