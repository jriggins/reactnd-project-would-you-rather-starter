import { ADD_QUESTION, RECEIVE_QUESTIONS, SUBMIT_POLL_ANSWER } from '../actions/constants';

export default function(previousState = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...previousState,
        ...action.questions
      };
    case SUBMIT_POLL_ANSWER:
      const { questionId, userId, answer } = action;
      const pollQuestion = previousState[questionId];
      const pollAnswer = pollQuestion[answer];

      return {
        ...previousState,
        [questionId]: {
          ...pollQuestion,
          [answer]: {
            ...pollAnswer,
            votes: pollAnswer.votes.concat(userId)
          }
        }
      };
    case ADD_QUESTION: {
      const newQuestion = action.question;

      return {
        ...previousState,
        [newQuestion.id]: {
          ...newQuestion
        }
      };
    }
    default:
      return previousState;
  }
}
