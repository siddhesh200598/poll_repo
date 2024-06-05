/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PollWidget from './pollWidget';

test('allows voting on an option and updates local storage', () => {
  const data = {
    id: 1,
    question: 'How are you feeling today?',
    options: [
      { id: 1, text: 'Happy', vote: 10 },
      { id: 2, text: 'Neutral', vote: 5 },
      { id: 3, text: 'Sad', vote: 3 },
    ],
  };

  const { getByText } = render(<PollWidget data={data} />);

  fireEvent.click(getByText('Happy'));

  const storedData = JSON.parse(localStorage.getItem(`widget_${data.id}`));
  expect(storedData['Happy']).toBe(11);
});
