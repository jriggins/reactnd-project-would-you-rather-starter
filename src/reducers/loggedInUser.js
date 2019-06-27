export default function(previousState = {}, action) {
  switch(action.type) {
    case 'LOGIN_USER' :
      return action.user;
    case 'LOGOUT_USER':
      return {};
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
      // TODO REMOVE THIS!!!
      return {
        id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: '',
          answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      };
  }
}
