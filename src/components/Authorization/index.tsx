import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  passRegex, passErrorMessage, createUser, loginUser,
} from 'constants/athorization-constants';
import { State } from 'models';
import { User } from './models';
import './index.scss';

const Authorization: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const token = useSelector((state: State) => state.authToken.token);
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(true);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const clickHandler = () => setOpen(false);
  const onSubmit = (user: User) => (
    logged
      ? loginUser(user, dispatch)
      : createUser(user, setLogged)
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
                ref={register({ required: true })}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={register({ required: true })}
              />
              <div className="auth-password">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="Password"
                  ref={register({ pattern: passRegex })}
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
                  &nbsp;&nbsp;
                  <span>show</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="auth-error">
          <p>{errors.password && passErrorMessage}</p>
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
