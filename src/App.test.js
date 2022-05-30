import { render, screen } from '@testing-library/react';
import Tables from "./Table/Tables";
test('renders learn react link', () => {
  render(<Tables />);
  const headElement = screen.getByText(/User List/i);
  expect(headElement).toBeInTheDocument();
});
