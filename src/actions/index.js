import { getInitialData } from '../utils/api';

export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    users
  };
}

export function loginUser(user) {
  return {
    type: 'LOGIN_USER',
    user
  }
}

export function logoutUser(user) {
  return {
    type: 'LOGOUT_USER',
    user
  }
}

export function loadInitialData() {
  return (dispatch) => {
    getInitialData()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      });
  }
}
