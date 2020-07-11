import * as React from 'react';
import { useState } from 'react';
import RegisterForm from './Register';
import LoginForm from './Login';
import './index.scss';

const Authorization: React.FC = () => {
  const [openReg, setRegOpen] = useState(false);
  const [openLog, setLogOpen] = useState(false);
  const clickRegHandler = () => setRegOpen(!openReg);
  const clickLogHandler = () => setLogOpen(!openLog);
  return (
    <div className="auth-page">
      <div className="auth-reg-btns">
        <button
          type="button"
          className="auth-main-but"
          onClick={clickRegHandler}
        >
          Register
        </button>
        <button
          type="button"
          className="auth-main-but"
          onClick={clickLogHandler}
        >
          Log&nbsp;in
        </button>
        {openReg ? (
          <RegisterForm
            isOpen={openReg}
            setOpen={setRegOpen}
          />
        ) : (null)}
        {openLog ? (
          <LoginForm
            isOpen={openLog}
            setOpen={setLogOpen}
            setRegOpen={setRegOpen}
          />
        ) : (null)}
      </div>
    </div>
  );
};
export default Authorization;
