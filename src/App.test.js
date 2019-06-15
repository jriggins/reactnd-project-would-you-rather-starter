import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { wait, fireEvent, render } from '@testing-library/react';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('displays a Login control', async () => {
  const { debug,  getByText, getByLabelText, findByLabelText, findByTestId } = render(<App />);
  await wait(() => findByTestId('sarahedo'));
  const loginForm = getByLabelText('Login');
  fireEvent.change(loginForm, { target: { value: 'sarahedo'}});
  fireEvent.submit(loginForm);
  getByText('Logged In: sarahedo');
});
