import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://api.github.com/repos/tannerlinsley/react-query',
    async (req, res, ctx) => {
      return res(
        ctx.json({
          data: { name: 'Hello', description: 'Text' },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders mock data "Hello"', () => {
  render(<App />);
  //react query stuck in isLoading (how do we move to isSuccess?)

  screen.debug(); // get stuck in "Loading..." face
  expect(screen.getByText('Hello')); // never finds this text
});
