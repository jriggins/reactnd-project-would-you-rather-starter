import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Login from './login';

afterEach(cleanup);

describe('Login', () => {
  test('has a list of users to select from', () => {
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

    expect(getByText('Sarah Edo')).not.toBeNull();
    expect(getByText('Tyler McGinnis')).not.toBeNull();
    expect(getByText('John Doe')).not.toBeNull();
  });

  test('logins in a user', () => {
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

    const clickHandler = jest.fn(x => console.log("I have been called with: ", x));

    const { getByDisplayValue, getByTestId, getByText, debug } = render(<Login users={users} onLogin={clickHandler}/>);

    fireEvent.change(getByDisplayValue('Sarah Edo'), {target: {value: 'tylermcginnis'}});
    getByDisplayValue('Tyler McGinnis')
    fireEvent.click(getByText('Sign In'));

    expect(clickHandler.mock.calls.length).toEqual(1);
    debug(clickHandler.mock.calls[0])
    expect(clickHandler.mock.calls[0][0].id).toEqual('tylermcginnis');
  });
});
