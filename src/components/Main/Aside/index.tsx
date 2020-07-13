import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from 'models';
import {
  faAngleRight,
  faAngleLeft,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setUnLogged, setUserName } from 'containers/Authorisation/actions';
import { createUserStatistic } from 'constants/athorization-constants';
import {
  pagesEng, pagesRu, eng, ru,
} from 'constants/main-page-constants';
import MainSection from '../MainSection';
import './index.scss';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const statInfo = useSelector((state: State) => state.engPuzzleStatisticInfo);
  const name = useSelector((state: State) => state.authName.name);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const [usedPages, setUsedPages] = lang === 'eng' ? useState(pagesEng) : useState(pagesRu);
  const [isOpen, setAsideOpen] = useState(false);
  const handleAsideMenu = () => setAsideOpen(!isOpen);
  const closeAsideMenu = () => setAsideOpen(false);
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    dispatch(setUnLogged());
    dispatch(setUserName(''));
    createUserStatistic({ leaernedWords: 0, options: { stat: statInfo } });
  };

  useEffect(() => {
    if (lang === 'eng') {
      setUsedPages(pagesEng);
      setUsedLang(eng);
    } else {
      setUsedPages(pagesRu);
      setUsedLang(ru);
    }
  }, [lang]);

  return (
    <div className="main-entire-wrapper">
      <div id="header" className={isOpen ? 'header open' : 'header'}>
        <ul className="header-nav">
          {usedPages.map((pageData) => (
            <li key={pageData.page}>
              <Link to={`/${pageData.path}`} onClick={closeAsideMenu}>
                <button
                  type="button"
                  className="main-aside-btn"
                >
                  <FontAwesomeIcon
                    className="main-aside-point"
                    icon={pageData.icon}
                  />
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
            onClick={logout}
          />
          <span className="aside-menu-tooltip">
            {usedLang.logout}
          </span>
          <span>{name}</span>
        </div>
      </div>
      <MainSection />
    </div>
  );
};

export default Navigation;
