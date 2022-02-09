import React from 'react';
import { render, screen, within, fireEvent} from '@testing-library/react';

import MediaCard from './MediaCard.component.jsx';

it('renders without crashing', () => {
  render(<MediaCard />);
});

it('renders VideoCard elements correctly', () => {
  render(<MediaCard title="Title" description="Test explanation" />);

  const title = screen.getByText(/Title/i);
  const explanation = screen.getByText(/Test explanation/i);
  const list = screen.queryByRole('list');
  const items = screen.queryAllByRole("listitem");

  expect(title).toBeInTheDocument();
  expect(explanation).toBeInTheDocument();
  expect(items.length).toBe(3);
});

it('should handle the props click event', () => {
  window.alert = jest.fn();
  render(<MediaCard onClick={() => alert('clicked!')}/>);

  const list = screen.queryByRole('list');
  fireEvent.click(list);
  expect(window.alert).toHaveBeenCalledWith('clicked!');
});
