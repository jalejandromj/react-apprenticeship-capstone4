import React from 'react';
import { render, screen, within, fireEvent} from '@testing-library/react';

import ImageCard from './ImageCard.jsx';

it('renders without crashing', () => {
  render(<ImageCard />);
});

it('renders VideoCard elements correctly', () => {
  render(<ImageCard title="Title" explanation="Test explanation" date="YYYY-MM-DD" />);

  const title = screen.getByText(/Title/i);
  const explanation = screen.getByText(/Test explanation/i);
  const date = screen.getByText(/YYYY-MM-DD/i);
  const list = screen.queryByRole('list');
  const items = screen.queryAllByRole("listitem");

  expect(title).toBeInTheDocument();
  expect(explanation).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(items.length).toBe(4);
});

it('should handle the props click event', () => {
  window.alert = jest.fn();
  render(<ImageCard onClick={() => alert('clicked!')}/>);

  const list = screen.queryByRole('list');
  fireEvent.click(list);
  expect(window.alert).toHaveBeenCalledWith('clicked!');
});
