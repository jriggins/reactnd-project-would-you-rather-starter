import { LOGIN_USER, LOGOUT_USER } from './constants';

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user
  };
}

export function logoutUser(user) {
  return {
    type: LOGOUT_USER,
    user
  };
}
