import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startPage } from '../../../containers/Games/AudioCall/actions';

function StatisticPage(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="bg-info py-5" style={{ height: '100%' }}>
      <div className="bg-light rounded mx-auto p-3" style={{ width: '600px' }}>
        <p className="text-dark text-center mb-5" style={{ fontSize: '2rem' }}>Неплохо, но есть над чем поработать</p>
        <div className="bg-light mx-5 text-dark" style={{ overflowY: 'scroll', maxHeight: '50vh' }}>
          <div className="d-flex pb-3 bg-light text-dark flex-column border-bottom">
            <p className="text-danger my-1">ОШИБОК: 5</p>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word dfjl jljflek flkdjlij lkfejl fijfslfjlsk jfliej lfkj</span>
                {' '}
                - translate fewk lfkjs lfjls jflke
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
          </div>
          <div className="d-flex bg-light text-dark flex-column">
            <p className="text-success mb-1 mt-3">ЗНАЮ: 5</p>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" />
            </div>
            <div className="d-flex bg-light my-2 align-items-baseline">
              <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} />
              <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
                <span className="text-primary">word</span>
                {' '}
                - translate
              </span>
              <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" onMouseOver={() => { /* console.log(event.currentTarget.classList.add('text-danger')); */ }} onFocus={() => {}} />
            </div>
          </div>
        </div>
        <div className="d-flex bg-light justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-light border text-primary mr-5"
            onClick={() => {
              dispatch(startPage());
            }}
          >
            ИГРАТЬ СНОВА
          </button>
          <Link to="/Main">
            <button
              type="button"
              className="btn btn-light border text-primary mr-5"
              style={{ cursor: 'pointer' }}
            >
              НА ГЛАВНУЮ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StatisticPage;
