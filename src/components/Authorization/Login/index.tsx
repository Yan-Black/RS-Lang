import * as React from 'react';
import { useState } from 'react';
import { State } from 'models';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  passRegex,
  emailRegex,
  nameErrorMessage,
  emailErrorMessage,
  passErrorMessage,
  loginUser,
} from 'constants/athorization-constants';
import { useForm } from 'react-hook-form';
import { removeApiError } from 'containers/Authorisation/actions';
import { User, LogProps } from '../models';
import Loader from '../Loader';

const LoginForm: React.FC<LogProps> = ({ isOpen, setOpen, setRegOpen }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(false);
  const onSubmit = (user: User) => loginUser(user, dispatch, setLogged);
  const [type, setType] = useState('password');
  const clickHandler = () => {
    dispatch(removeApiError());
    setOpen(false);
  };
  const inputTypeHandler = () => (type === 'password' ? setType('text') : setType('password'));
  const removeError = () => dispatch(removeApiError());
  const openRegister = () => {
    setOpen(false);
    setRegOpen(true);
    dispatch(removeApiError());
  };
  const changeHandler = () => dispatch(removeApiError());
  const loading = useSelector((state: State) => state.engPuzzleLoading.isLoading);
  const apiError: string = useSelector((state: State) => state.authErrors.error);
  return (
    <div className={isOpen ? 'auth-wrapper' : 'disabled'}>
      <div className="auth-form-block-wrapper">
        <div className="auth-header">
          <h1>Log in</h1>
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
                onChange={changeHandler}
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
                onChange={changeHandler}
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
                  onChange={changeHandler}
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
              <li className="auth-error-mes">{apiError}</li>
              {logged ? (<span>Logged</span>) : (null)}
            </ul>
          )}
        </div>
        <div className="auth-footer">
          {apiError.includes('couldnt find') ? (
            <button
              type="submit"
              className="auth-reg-but"
              form="auth-form"
              onClick={openRegister}
            >
              <span>register</span>
            </button>
          ) : (null)}
          {logged ? (null)
            : (
              <button
                type="submit"
                className="auth-reg-but"
                form="auth-form"
                onClick={removeError}
              >
                <span>log in</span>
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
