import React from 'react';
import Login from './Login';
import { render, fireEvent } from '@testing-library/react';
import { getByText } from '@testing-library/dom';

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

  test('displays a Login control with the list of Users', () => {
    const { getByTestId } = render(<Login users={users}/>);
    getByTestId('default');
    getByTestId('sarahedo');
    getByTestId('tylermcginnis');
    getByTestId('johndoe');
  });

  describe('when User Tyler McGinnis is selected', () => {
    test('sets Tyler McGinnis as the selected user', () => {
      const { getByDisplayValue, getByLabelText } = render(<Login users={users}/>);
      const select  = getByLabelText('Login');
      fireEvent.change(select, { target: { value: 'tylermcginnis'}});
      getByDisplayValue('Tyler McGinnis')
    });
  });
});
