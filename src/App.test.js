import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
test('it should have correct title', () => {
  render(<App />);
  const text = screen.getByText("Counter App");
  expect(text).toBeInTheDocument();
});
});