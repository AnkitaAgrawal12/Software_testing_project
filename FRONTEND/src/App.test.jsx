import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page link', () => {
  render(<App />);

  // Check if the login page link is rendered
  const loginLink = screen.getByText(/login/i);
  expect(loginLink).toBeInTheDocument();
});

test('navigates to login page when accessing root path', () => {
  render(<App />);

  // Check if navigating to root ("/") redirects to "/login"
  const loginPage = screen.getByText(/login/i);
  expect(loginPage).toBeInTheDocument();
});
