import { getInitialData } from '../utils/api';

export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    users
  };
}

export function loadInitialData() {
  return (dispatch) => {
    getInitialData()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      });
  }
}
