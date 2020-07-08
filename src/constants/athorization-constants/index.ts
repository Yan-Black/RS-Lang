import { User } from 'components/Authorization/models';
import { setUserToken, addApiError, removeApiError } from 'containers/Authorisation/actions';
import { ActionAuth } from 'containers/Authorisation/models';
import { showLoader, hideLoader } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/actions';

const regUrl = 'https://afternoon-falls-25894.herokuapp.com/users';
const tokenUrl = 'https://afternoon-falls-25894.herokuapp.com/signin';
export const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const nameErrorMessage = 'Поле Name не должно быть пустым';
export const emailErrorMessage = 'Введите корректный email';
export const passErrorMessage = 'Пароль должен содержать не менее 8 символов, как минимум одну прописную букву, одну заглавную букву, одну цифру и один спецсимвол из +-_@$!%*?&#.,;:[]{}';
export const createUser = (
  user: User,
  dispatch: React.Dispatch<ActionAuth>,
  setRegistred: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  dispatch(showLoader());
  fetch(regUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        setRegistred(true);
        dispatch(hideLoader());
        dispatch(removeApiError());
        return res.json();
      }
      return Promise.reject(res);
    })
    .catch((e) => {
      dispatch(hideLoader());
      switch (e.status) {
        case 417: dispatch(addApiError('user with this e-mail exists'));
          break;
        case 422: dispatch(addApiError('password contains invalid value'));
          break;
        case 404: dispatch(addApiError('Couldnt find a(an) user with current email'));
          break;
        default: dispatch(addApiError('some server error occures'));
      }
    });
};

export const loginUser = (
  user: User,
  dispatch: React.Dispatch<ActionAuth>,
  setLogged: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  dispatch(showLoader());
  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        setLogged(true);
        return res.json();
      }
      return Promise.reject(res);
    })
    .then((res) => {
      dispatch(hideLoader());
      dispatch(removeApiError());
      dispatch(setUserToken(res.token));
    })
    .catch((e) => {
      dispatch(hideLoader());
      switch (e.status) {
        case 417: dispatch(addApiError('user with this e-mail exists'));
          break;
        case 422: dispatch(addApiError('password contains invalid value'));
          break;
        case 404: dispatch(addApiError('couldnt find a(an) user with current email'));
          break;
        case 403: dispatch(addApiError('password or login incorrect'));
          break;
        default: dispatch(addApiError('some server error occures'));
      }
    });
};
