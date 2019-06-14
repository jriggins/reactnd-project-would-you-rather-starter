import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

test('displays a Login control', () => {
  const { getByLabelText } = render(<Login />);
  getByLabelText('Login')
});

describe('with a list of users', () => {
  const users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo'
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis'
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe'
    },
  };

  test('displays a Login control with the list of users', () => {
    expect(Object.values(users).length).toBe(3);
    const { getByTestId } = render(<Login users={users}/>);
    getByTestId('default');
    getByTestId('sarahedo');
    getByTestId('tylermcginnis');
    getByTestId('johndoe');
  });
});
