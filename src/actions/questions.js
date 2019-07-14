import { RECEIVE_QUESTIONS, ADD_QUESTION } from './constants';
import * as api from '../utils/api';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function saveQuestion(userId, optionOne, optionTwo) {
  return (dispatch) => {
    api.saveQuestion(userId, optionOne, optionTwo).then((question) => dispatch(addQuestion(question)));
  };
}
