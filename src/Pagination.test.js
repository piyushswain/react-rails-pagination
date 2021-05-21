import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

test('renders learn react link', () => {
  render(<Pagination page={1} pages={5} handleChangePage={() => {}} />);
  const linkPageOne = screen.getByText(/1/i);
  const linkPageNext = screen.getByText(/Next/i);
  const linkPagePrev = screen.getByText(/Prev/i);
  expect(linkPageOne).toBeInTheDocument();
  expect(linkPageNext).toBeInTheDocument();
  expect(linkPagePrev).toBeInTheDocument();
});
