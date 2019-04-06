import React from 'react';
import 'react-testing-library';
import { shallow } from 'enzyme';

import App from './App';
import Login from './components/login';

it('renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component.contains(<Login/>)).toEqual(true);
});
