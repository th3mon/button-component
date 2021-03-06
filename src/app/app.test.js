import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app';

test('renders button component', () => {
  const { getByText } = render(<App />);
  const buttonComponent = getByText(/default/i);

  expect(buttonComponent).toBeInTheDocument();
});
