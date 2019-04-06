import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Login from './login';

afterEach(cleanup);

it('has a list of users to select from', () => {
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
  }
  const { queryByText } = render(<Login users={users}/>);

  expect(queryByText('Sarah Edo')).not.toBeNull();
  expect(queryByText('Tyler McGinnis')).not.toBeNull();
  expect(queryByText('John Doe')).not.toBeNull();
})
