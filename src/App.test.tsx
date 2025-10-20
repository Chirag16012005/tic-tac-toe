import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders block component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Block/i);
  expect(linkElement).toBeInTheDocument();
});
