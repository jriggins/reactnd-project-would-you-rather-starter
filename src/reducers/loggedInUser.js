export default function(previousState = null, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user;
    case 'LOGOUT_USER':
      return null;
    case 'SUBMIT_POLL_ANSWER':
      return {
        ...previousState,
        answers: {
          ...previousState.answers,
          [action.questionId]: action.answer
        }
      };
    default:
      return previousState;
  }
}
