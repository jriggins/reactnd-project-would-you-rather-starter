import * as api from '../utils/api';

export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    users
  };
}

export function receiveQuestions(questions) {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions
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

export function submitPollAnswer(userId, questionId, answer) {
  return {
    type: 'SUBMIT_POLL_ANSWER',
    userId,
    questionId,
    answer
  }
}

export function addQuestion(question) {
  return {
    type: 'ADD_QUESTION',
    question
  }
}

export function loadInitialData() {
  return (dispatch) => {
    api.getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      });
  }
}

export function savePollAnswer(userId, questionId, answer) {
  return (dispatch) => {
    api.savePollAnswer(userId, questionId, answer)
      .then(dispatch(submitPollAnswer(userId, questionId, answer)))
      .then(dispatch(loadInitialData()));
  }
}

export function saveQuestion(userId, optionOne, optionTwo) {
  return (dispatch) => {
    api.saveQuestion(userId, optionOne, optionTwo)
      .then((question) => dispatch(addQuestion(question)));
  };
}
