import { ADD_QUESTION, RECEIVE_USERS, SUBMIT_POLL_ANSWER } from '../actions/constants';

export default function(previousState = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...previousState,
        ...action.users
      };
    case SUBMIT_POLL_ANSWER:
      const { userId, questionId, answer } = action;
      const user = previousState[userId];

      return {
        ...previousState,
        [user.id]: {
          ...user,
          answers: {
            ...user.answers,
            [questionId]: answer
          }
        }
      };
    case ADD_QUESTION:
      const { question } = action;
      const author = previousState[question.author];

      return {
        ...previousState,
        [author.id]: {
          ...author,
          questions: author.questions.concat(question.id)
        }
      };
    default:
      return previousState;
  }
}
