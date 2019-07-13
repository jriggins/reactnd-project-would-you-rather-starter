
export default function(previousState = {}, action) {
  switch(action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.questions;
    case 'SUBMIT_POLL_ANSWER':
      return {
        ...previousState,
        [action.questionId]: {
          ...previousState[action.questionId],
          [action.answer]: {
            ...previousState[action.questionId][action.answer],
            votes: previousState[action.questionId][action.answer].votes.concat(action.userId)
          }
        }
      };
    case 'ADD_QUESTION': {
      return {
        ...previousState,
        [action.question.id]: {
          ...action.question
        }
      }
    }
    default:
      return previousState;
  }
};
