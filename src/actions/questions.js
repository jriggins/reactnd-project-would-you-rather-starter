import * as api from '../utils/api';

export function receiveQuestions(questions) {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions
  };
}

export function addQuestion(question) {
  return {
    type: 'ADD_QUESTION',
    question
  };
}

export function submitPollAnswer(userId, questionId, answer) {
  return {
    type: 'SUBMIT_POLL_ANSWER',
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

export function saveQuestion(userId, optionOne, optionTwo) {
  return (dispatch) => {
    api.saveQuestion(userId, optionOne, optionTwo).then((question) => dispatch(addQuestion(question)));
  };
}
