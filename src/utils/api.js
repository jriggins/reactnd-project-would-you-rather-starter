import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }));
}

export function savePollAnswer(userId, questionId, answer) {
  return _saveQuestionAnswer({ authedUser: userId, qid: questionId, answer })
}

export function saveQuestion(authorId, optionOneText, optionTwoText) {
  return _saveQuestion({
    author: authorId,
    optionOneText,
    optionTwoText
  });
}
