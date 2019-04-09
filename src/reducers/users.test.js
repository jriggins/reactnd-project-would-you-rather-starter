import users from  './users';

describe('when the action type is RECEIVE_USERS', () => {
  it('adds users to the new state', () => {
    const usersObj = {
      users: {
        user1: {
          id: 'user1', name: 'User 1'
        }
      }
    };
    const action = { type: 'RECEIVE_USERS', ...usersObj };
    const state = { originalState: {} };
    const expectedState = { ...state, ...usersObj };

    expect(users(state, action)).toEqual(expectedState);
  });
});

describe('when the action type is not RECEIVE_USERS', () => {
  it('returns the original state', () => {
    const usersObj = {
      users: {
        user1: {
          id: 'user1', name: 'User 1'
        }
      }
    };
    const action = { type: 'NOT_RECEIVE_USERS', ...usersObj };
    const state = { originalState: {} };

    expect(users(state, action)).toEqual(state);
  });
})
