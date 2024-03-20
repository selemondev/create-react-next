import { render } from '@testing-library/react';
import App from '../src/App';
import { it, expect } from "vitest";

it('renders the heading with the correct class', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText('Welcome To Create React Next');
  expect(headingElement).toBeInTheDocument();
});