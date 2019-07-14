export default function(previousState = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      const mapUserToLeaderboard = (user) => {
        const { id, name, avatarURL, answers, questions } = user;
        const answerCount = Object.keys(answers).length;
        const questionCount = Object.keys(questions).length;
        const score = answerCount + questionCount;

        return {
          id,
          name,
          avatarURL,
          answerCount,
          questionCount,
          score
        };
      };

      return Object.fromEntries(
        Object.values(action.users)
          .map(mapUserToLeaderboard)
          .map((user) => [user.id, user])
      );
    case 'SUBMIT_POLL_ANSWER':
      const answerSubmitter = previousState[action.userId];

      return {
        ...previousState,
        [answerSubmitter.id]: {
          ...answerSubmitter,
          answerCount: answerSubmitter.answerCount + 1,
          score: answerSubmitter.score + 1
        }
      };
    case 'ADD_QUESTION':
      const questionSubmitter = previousState[action.question.author];

      return {
        ...previousState,
        [questionSubmitter.id]: {
          ...questionSubmitter,
          questionCount: questionSubmitter.questionCount + 1,
          score: questionSubmitter.score + 1
        }
      };
    default:
      return previousState;
  }
}
