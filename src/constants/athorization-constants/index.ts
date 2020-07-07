import { User } from 'components/Authorization/models';
import { setUserToken } from 'containers/Authorisation/actions';
import { ActionAuth } from 'containers/Authorisation/models';

export const passRegex = /^[^\\s](?=.{8,}$)(?=[^_]*[A-Z])(?=.*[a-z])(?=.*[0-9])/;
export const passErrorMessage = 'Пароль должен содержать не менее 8 символов, как минимум одну прописную букву, одну заглавную букву, одну цифру и один спецсимвол из +-_@$!%*?&#.,;:[]{}';
const regUrl = 'https://afternoon-falls-25894.herokuapp.com/users';
const tokenUrl = 'https://afternoon-falls-25894.herokuapp.com/signin';

export const createUser = async (
  user: User,
  setLogged: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> => {
  await fetch(regUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  setLogged(true);
};

export const loginUser = async (
  user: User,
  dispatch: React.Dispatch<ActionAuth>,
): Promise<void> => {
  const rawResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const resp = await rawResponse.json();
  dispatch(setUserToken(resp.token));
};
