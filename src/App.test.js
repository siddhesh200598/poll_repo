/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Mock pollData
jest.mock('./constant', () => ({
  pollData: [
    {
      id: 1,
      question: 'How you feel today?',
      options: [
        { id: 1, text: 'Brilliant! I have so much energy', vote: 389 },
        { id: 2, text: 'Always can be worse.', vote: 678 },
        { id: 3, text: 'Please, end my misery.', vote: 872 },
      ],
    },
    {
      id: 2,
      question: 'How you like the Opinary test?',
      options: [
        { id: 1, text: 'It was great and so challenging.', vote: 172 },
        { id: 2, text: 'Not bad, but you can improve.', vote: 827 },
        { id: 3, text: 'It was a nightmare, never again.', vote: 627 },
      ],
    },
  ],
}));

test('renders App component with PollWidget components', async () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to Poll')).toBeInTheDocument();
    expect(getByText(/How you feel today?/i)).toBeInTheDocument();
    expect(getByText(/How you like the Opinary test?/i)).toBeInTheDocument();
});
