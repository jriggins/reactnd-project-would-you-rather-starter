import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';

import App from './App';
import middleware from './middleware';

it('renders Login by default', () => {
  const store = createStore(jest.fn(), middleware);
  const { getByText } = render(<Provider store={store}><App/></Provider>);
  expect(getByText("Sign In")).toBeDefined();
});
