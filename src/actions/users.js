import { RECEIVE_USERS, SUBMIT_POLL_ANSWER } from './constants';
import * as api from '../utils/api';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function submitPollAnswer(userId, questionId, answer) {
  return {
    type: SUBMIT_POLL_ANSWER,
    userId,
    questionId,
    answer
  };
}

export function savePollAnswer(userId, questionId, answer) {
  return (dispatch) => {
    api.savePollAnswer(userId, questionId, answer).then(dispatch(submitPollAnswer(userId, questionId, answer)));
  };
}
