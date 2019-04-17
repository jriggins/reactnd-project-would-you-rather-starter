import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Login from './login';
import usersReducer from '../reducers/users'

afterEach(cleanup);

describe('Login', () => {
  describe('when no initial user selection is made', () => {
    test('the component shows a list of users to select from', () => {
      const users = {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo',
        },
        tylermcginnis: {
          id: 'tylermcginnis',
          name: 'Tyler McGinnis',
        },
        johndoe: {
          id: 'johndoe',
          name: 'John Doe',
        }
      };

      const store = createStore(usersReducer);
      const { getByText } = render(<Provider store={store}><Login/></Provider>);
      store.dispatch({ type: "RECEIVE_USERS", users: users });

      expect(getByText('Sarah Edo')).toBeDefined();
      expect(getByText('Tyler McGinnis')).toBeDefined();
      expect(getByText('John Doe')).toBeDefined();
    });

    test('the initial selection is Sarah Edo', () => {
      const users = {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo',
        },
        johndoe: {
          id: 'johndoe',
          name: 'John Doe',
        },
        tylermcginnis: {
          id: 'tylermcginnis',
          name: 'Tyler McGinnis',
        },
      };

      const store = createStore(usersReducer);
      const { getByTestId } = render(<Provider store={store}><Login/></Provider>);
      store.dispatch({ type: "RECEIVE_USERS", users: users });

      expect(getByTestId('userSelect').value).toEqual('sarahedo')
    });

    describe('and clicks Sign In', () => {
      test('notifies of a login request for Sarah Edo', () => {
        const users = {
          sarahedo: {
            id: 'sarahedo',
            name: 'Sarah Edo',
          },
          johndoe: {
            id: 'johndoe',
            name: 'John Doe',
          },
          tylermcginnis: {
            id: 'tylermcginnis',
            name: 'Tyler McGinnis',
          },
        };

        const clickHandler = jest.fn();

        const store = createStore(usersReducer);
        const { getByText } = render(<Provider store={store}><Login onLogin={clickHandler}/></Provider>);
        store.dispatch({ type: "RECEIVE_USERS", users: users });

        // fireEvent.change(getByTestId('userSelect'), {target: {value: 'sarahedo'}});
        fireEvent.click(getByText('Sign In'));

        expect(clickHandler.mock.calls.length).toEqual(1);
        expect(clickHandler.mock.calls[0][0].id).toEqual('sarahedo');
      });
    })
  });

  describe('when the user selects Tyler McGinnis', () => {
    describe('and clicks Sign In', () => {
      test('the component notifies of a login request for Tyler McGinnis', () => {
        const users = {
          sarahedo: {
            id: 'sarahedo',
            name: 'Sarah Edo',
          },
          johndoe: {
            id: 'johndoe',
            name: 'John Doe',
          },
          tylermcginnis: {
            id: 'tylermcginnis',
            name: 'Tyler McGinnis',
          },
        };

        const clickHandler = jest.fn();

        const store = createStore(usersReducer);
        const { getByTestId, getByText } = render(<Provider store={store}><Login onLogin={clickHandler}/></Provider>);
        store.dispatch({ type: "RECEIVE_USERS", users: users });

        fireEvent.change(getByTestId('userSelect'), {target: {value: 'tylermcginnis'}});
        fireEvent.click(getByText('Sign In'));

        expect(clickHandler.mock.calls.length).toEqual(1);
        expect(clickHandler.mock.calls[0][0].id).toEqual('tylermcginnis');
      })
    });
  });

  it("loads from the Redux store", () => {
    const users = {
      sarahedo: {
        id: 'sarahedo',
          name: 'Sarah Edo',
      },
      johndoe: {
        id: 'johndoe',
          name: 'John Doe',
      },
      tylermcginnis: {
        id: 'tylermcginnis',
          name: 'Tyler McGinnis',
      }
    };

    const store = createStore(usersReducer);
    const { getByText } = render(<Provider store={store}><Login /></Provider>);
    store.dispatch({ type: "RECEIVE_USERS", users: users });

    expect(getByText('Sarah Edo')).toBeDefined();
  })
});
