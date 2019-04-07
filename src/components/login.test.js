import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Login from './login';

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
      const { getByText } = render(<Login users={users}/>);

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

      const { getByTestId } = render(<Login users={users}/>);

      expect(getByTestId('userSelect').value).toEqual('sarahedo')
    });

    describe('and the user clicks Sign In', () => {
      test.skip('notifies of a login request for Sarah Edo', () => {
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

        const { getByTestId, getByText } = render(<Login users={users} onLogin={clickHandler}/>);

        fireEvent.change(getByTestId('userSelect'), {target: {value: 'tylermcginnis'}});
        fireEvent.click(getByText('Sign In'));

        expect(clickHandler.mock.calls.length).toEqual(1);
        expect(clickHandler.mock.calls[0][0].id).toEqual('tylermcginnis');
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

        const {getByTestId, getByText} = render(<Login users={users} onLogin={clickHandler}/>);

        fireEvent.change(getByTestId('userSelect'), {target: {value: 'tylermcginnis'}});
        fireEvent.click(getByText('Sign In'));

        expect(clickHandler.mock.calls.length).toEqual(1);
        expect(clickHandler.mock.calls[0][0].id).toEqual('tylermcginnis');
      })
    });
  });
});
