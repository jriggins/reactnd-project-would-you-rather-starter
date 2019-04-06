import React from 'react';
import 'react-testing-library';
import { shallow } from 'enzyme';

import Login from './login';

it('renders without crashing', () => {
  const component = shallow(<Login/>);

  expect(component).not.toEqual(null);
});

it('has a list of users to select from', () => {
  const component = shallow(<Login />);
  const users = component.find('.Login .users .user')

  expect(users).toHaveLength(3);
  expect(users.at(0).text()).toEqual('Sarah Edo')
  expect(users.at(1).text()).toEqual('Tyler McGinnis')
  expect(users.at(2).text()).toEqual('John Doe')
})
