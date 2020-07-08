import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  passRegex,
  emailRegex,
  nameErrorMessage,
  emailErrorMessage,
  passErrorMessage,
  createUser,
  loginUser,
} from 'constants/athorization-constants';
import { State } from 'models';
import { User } from './models';
import Loader from './Loader';
import './index.scss';

const Authorization: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const loading = useSelector((state: State) => state.engPuzzleLoading.isLoading);
  const token = useSelector((state: State) => state.authToken.token);
  const apiError = useSelector((state: State) => state.authErrors.error);
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(true);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const clickHandler = () => setOpen(false);
  const onSubmit = (user: User) => (
    logged
      ? loginUser(user, dispatch)
      : createUser(user, dispatch, setLogged)
  );
  const inputTypeHandler = () => (type === 'password' ? setType('text') : setType('password'));
  return (
    <div className={open ? 'auth-wrapper' : 'disabled'}>
      <div className="auth-form-block-wrapper">
        <div className="auth-header">
          <h1>Register</h1>
          <button
            type="button"
            className="auth-close"
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="auth-form-wrapper">
          <div className="auth-labels">
            <label htmlFor="name">
              Name:
              <p className="auth-tip">Required</p>
            </label>
            <label htmlFor="email">
              Email:
              <p className="auth-tip">Required</p>
            </label>
            <label htmlFor="password">
              Password:
              <p className="auth-tip">Required</p>
            </label>
          </div>
          <div className="auth-form">
            <form
              className="auth-reg-form"
              onSubmit={handleSubmit(onSubmit)}
              id="auth-form"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                ref={register({
                  required: true,
                  minLength: 3,
                })}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={register({
                  required: true,
                  pattern: emailRegex,
                })}
              />
              <div className="auth-password">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="Password"
                  ref={register({
                    required: true,
                    pattern: passRegex,
                  })}
                />
                <button
                  type="button"
                  className="auth-show"
                  onClick={inputTypeHandler}
                >
                  {type === 'password' ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="auth-error">
          {loading ? (
            <Loader />
          ) : (
            <ul className="auth-error-list">
              <li>{errors.name && nameErrorMessage}</li>
              <li>{errors.email && emailErrorMessage}</li>
              <li>{errors.password && passErrorMessage}</li>
              <li>{apiError}</li>
            </ul>
          )}
        </div>
        <div className="auth-footer">
          <button
            type="submit"
            className="auth-reg-but"
            form="auth-form"
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
