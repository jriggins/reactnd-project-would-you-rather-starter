import { RECEIVE_USERS, receiveUsers } from './users';


it('creates a RECEIVE_USERS action', () => {
  const users = {
    user1: {
      id: "user1",
      name: "User 1"
    }
  };

  expect(receiveUsers(users)).toEqual({
    type: RECEIVE_USERS,
    users: users
  })
});
