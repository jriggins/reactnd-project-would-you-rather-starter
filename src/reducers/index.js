import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import loggedInUser from './loggedInUser';
import leaderboard from './leaderboard';

export default combineReducers({
  users,
  questions,
  loggedInUser,
  leaderboard
});
