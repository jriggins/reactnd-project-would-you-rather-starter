import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';

test('displays a Login control', () => {
  const { getByLabelText } = render(<Login />);
  getByLabelText('Login')
});

describe('with a list of users', () => {
  test('displays a Login control', () => {
    const { getByLabelText } = render(<Login />);
    getByLabelText('Login')
  });
});
