import { render, screen } from '@testing-library/react'; // Import render form testing-libary/react
import App from './App'; // Import App.js

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
