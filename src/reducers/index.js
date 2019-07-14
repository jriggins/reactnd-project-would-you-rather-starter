import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import loggedInUserId from './loggedInUserId';

export default combineReducers({
  users,
  questions,
  loggedInUserId
});
