import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/CinemaPrime/i);
  expect(linkElement).toBeInTheDocument();
});
