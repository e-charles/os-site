import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';
// import '@testing-library/jest-dom';

test('renders index page', () => {
  render(<Home />);
  const homeElement = screen.getByText('Home file');
  expect(homeElement).toBeInTheDocument();
});
