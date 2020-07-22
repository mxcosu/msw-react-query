import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://api.github.com/repos/tannerlinsley/react-query',
    async (req, res, ctx) => {
      return res(
        ctx.json({
           name: 'Hello', 
           description: 'Text',
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders mock data "Hello"', async () => {
  render(<App />);

  //loading gets immediately added
  expect(screen.getByText(/loading/i));

  // need to await for a bit to let the mock resolve to the data
  expect(await screen.findByText(/Hello/i));
});
